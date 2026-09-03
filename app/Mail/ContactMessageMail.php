<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessageMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * @param  array<string, mixed>  $data
     */
    public function __construct(
        public array $data,
        public ?string $attachmentContent = null,
        public ?string $attachmentName = null,
        public ?string $attachmentMime = null,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nouveau message de contact — '.$this->data['first_name'].' '.($this->data['last_name'] ?? ''),
            replyTo: [$this->data['email']],
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.contact',
            with: ['data' => $this->data],
        );
    }

    /**
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        if (! $this->attachmentContent) {
            return [];
        }

        return [
            Attachment::fromData(fn () => $this->attachmentContent, $this->attachmentName)
                ->withMime($this->attachmentMime),
        ];
    }
}
