<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChatbotMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    // Capture les messages saisis dans le widget Chatbot (saisie libre) afin
    // qu'ils remontent dans le tableau de bord admin /admin/messages, au même
    // titre que les soumissions du formulaire de contact.
    public function store(ChatbotMessageRequest $request): JsonResponse
    {
        $data = $request->validated();

        ContactMessage::query()->create([
            'first_name' => $data['first_name'] ?? null,
            'email' => $data['email'] ?? null,
            'message' => $data['message'],
            'source' => 'chatbot',
        ]);

        Log::info('[Chatbot] Message captured for admin follow-up');

        return response()->json(['status' => 'ok']);
    }
}
