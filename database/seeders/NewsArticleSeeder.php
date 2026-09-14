<?php

namespace Database\Seeders;

use App\Models\NewsArticle;
use Illuminate\Database\Seeder;

// Reprend les 4 actualités réelles précédemment codées en dur dans
// resources/js/data/homeFeedData.js (section "Latest Thinking").
class NewsArticleSeeder extends Seeder
{
    public function run(): void
    {
        $articles = [
            [
                'title' => "ANSSI Côte d'Ivoire & Agréments PASSI : la feuille de route Cybersécurité 2026-2030",
                'title_en' => "ANSSI Côte d'Ivoire & PASSI Accreditations: the 2026-2030 Cybersecurity Roadmap",
                'excerpt' => "Un cadre de qualification renforcé pour sécuriser durablement les infrastructures numériques sensibles du pays.",
                'excerpt_en' => "A reinforced qualification framework to durably secure the country's sensitive digital infrastructure.",
                'author' => 'Direction Cybersécurité',
                'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cybersecurity_Operations_at_Port_San_Antonio.jpg/1280px-Cybersecurity_Operations_at_Port_San_Antonio.jpg',
            ],
            [
                'title' => 'Conférence IMPACT IA Abidjan : stratégie nationale et usages du numérique',
                'title_en' => 'IMPACT AI Abidjan Conference: National Strategy and Digital Adoption',
                'excerpt' => "Un rendez-vous majeur pour accélérer l'adoption responsable de l'intelligence artificielle en Côte d'Ivoire.",
                'excerpt_en' => "A major event to accelerate the responsible adoption of artificial intelligence in Côte d'Ivoire.",
                'author' => 'ACS Group Insights',
                'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Audience_-_TNW_Conference_2011_-_Day_2_%285669377962%29.jpg/1280px-Audience_-_TNW_Conference_2011_-_Day_2_%285669377962%29.jpg',
            ],
            [
                'title' => 'Digitalisation des Services Publics & Cloud Souverain : le Plan PND CI',
                'title_en' => 'Public Services Digitalization & Sovereign Cloud: the PND CI Plan',
                'excerpt' => "Le Plan National de Développement mise sur un cloud souverain pour moderniser durablement les services publics.",
                'excerpt_en' => "The National Development Plan relies on a sovereign cloud to durably modernize public services.",
                'author' => 'Pôle Audit & Conformité',
                'image' => "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Datacenter_informatique_de_l%27Ecole_Polytechnique_%2832544959853%29.jpg/1280px-Datacenter_informatique_de_l%27Ecole_Polytechnique_%2832544959853%29.jpg",
            ],
            [
                'title' => 'Normes ISO 27001 & Directive NIS 2 : la résilience des infrastructures critiques',
                'title_en' => 'ISO 27001 Standards & the NIS 2 Directive: Critical Infrastructure Resilience',
                'excerpt' => "Comment structurer sa conformité réglementaire autour d'une PSSI robuste et des exigences NIS 2.",
                'excerpt_en' => 'How to structure regulatory compliance around a robust security policy and NIS 2 requirements.',
                'author' => 'Experts IT ACS',
                'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/CERN_Computer_Center_02.jpg/1280px-CERN_Computer_Center_02.jpg',
            ],
        ];

        foreach ($articles as $position => $article) {
            NewsArticle::query()->updateOrCreate(
                ['title' => $article['title']],
                [...$article, 'is_published' => true, 'position' => $position],
            );
        }
    }
}
