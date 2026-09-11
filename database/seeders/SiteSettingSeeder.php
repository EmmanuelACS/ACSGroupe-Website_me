<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

// Reprend les coordonnées et messages précédemment codés en dur dans
// resources/js/Components/Footer.jsx et resources/js/Components/Chatbot.jsx.
class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $defaults = [
            'contact_email' => 'Accesstechnology@acsgroupe.ci',
            'contact_phone_primary' => '(+225) 07 77 44 91 91',
            'contact_phone_secondary' => '(+225) 27 22 54 81 81',
            'contact_address' => 'Abidjan, Cocody Danga, Côte d’Ivoire',
            'social_facebook' => null,
            'social_linkedin' => null,
            'social_twitter' => null,
            'social_instagram' => null,
            'chatbot_enabled' => '1',
            'chatbot_welcome_message_fr' => "Bonjour 👋 Comment pouvons-nous vous accompagner aujourd'hui ?",
            'chatbot_welcome_message_en' => 'Hello 👋 How can we help you today?',
            'slideshow_delay_ms' => '3000',
        ];

        foreach ($defaults as $key => $value) {
            SiteSetting::query()->updateOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}
