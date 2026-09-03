<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['nullable', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],
            'company' => ['nullable', 'string', 'max:150'],
            'role' => ['nullable', 'string', 'max:150'],
            'product_design' => ['nullable', 'string', 'max:150'],
            'message' => ['required', 'string', 'max:5000'],
            'budget' => ['nullable', 'integer', 'min:0'],
            'attachment' => ['nullable', 'file', 'max:20480', 'mimes:pdf,doc,docx,png,jpg,jpeg'],
        ];
    }
}
