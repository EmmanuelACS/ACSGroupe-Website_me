<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMessageMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Contact');
    }

    public function store(ContactRequest $request): RedirectResponse
    {
        $data = $request->safe()->except('attachment');

        $attachment = $request->file('attachment');

        Mail::to(config('mail.contact_recipient', config('mail.from.address')))
            ->send(new ContactMessageMail(
                data: $data,
                attachmentContent: $attachment?->get(),
                attachmentName: $attachment?->getClientOriginalName(),
                attachmentMime: $attachment?->getMimeType(),
            ));

        return back()->with('success', 'Votre message a bien été envoyé.');
    }
}
