<?php

namespace Database\Seeders;

use App\Models\Staff;
use Illuminate\Database\Seeder;

// Reprend les membres réels de l'équipe ACS Group (précédemment codés en dur
// dans resources/js/data/acsExpertise.js) afin de ne perdre aucun contenu
// existant lors du passage au CMS piloté par la base de données.
class StaffSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [
                'name' => 'TIEMOKO Régis',
                'role' => 'Directeur Général',
                'bio' => "Directeur Général d'Access Technologies Solution (ACS), filiale d'ACS Group et partenaire exclusif de NEC XON Corporation en Côte d'Ivoire.",
                'photo' => '/img/staff/IMG_9503.jpg',
                'is_director' => true,
            ],
            [
                'name' => 'Ekissi Férié',
                'role' => 'Responsable IT & Architecte Solutions',
                'bio' => 'Responsable IT chez ACS Group avec plus de 10 ans d’expérience, cet Architecte de Solutions Numériques pilote les projets de digitalisation ministériels et institutionnels.',
                'photo' => '/img/staff/1H5A0316.jpg',
                'is_director' => false,
            ],
            [
                'name' => 'KANTE Estelle',
                'role' => 'PMO - Project Management Officer',
                'bio' => 'PMO chez ACS Group, elle pilote et coordonne les projets de transformation digitale et de digitalisation des processus. Son expertise couvre le cadrage des besoins, la planification, le suivi des livrables et le reporting stratégique auprès des parties prenantes.',
                'photo' => '/img/staff/1H5A0470.jpg',
                'is_director' => false,
            ],
            [
                'name' => 'Zouzzou Olivia',
                'role' => 'Assistante Projet IT',
                'bio' => 'Assistante Projet IT, elle apporte une double compétence juridique et technologique au suivi des projets de digitalisation. Elle participe au cadrage des besoins, à la coordination des intervenants et à la gestion des livrables.',
                'photo' => '/img/staff/1H5A0440.jpg',
                'is_director' => false,
            ],
            [
                'name' => 'Kouadio Grace',
                'role' => 'Assistante Projet IT',
                'bio' => 'Assistante Projet IT, elle intervient activement sur les projets de digitalisation, la collecte et l’analyse des besoins métiers. Elle assure la préparation des livrables et le suivi rigoureux de l’avancement des projets informatiques.',
                'photo' => '/img/staff/1H5A0485.jpg',
                'is_director' => false,
            ],
            [
                'name' => 'Alaben Maimouna',
                'role' => 'Assistante Réceptionniste',
                'bio' => 'Assistante Réceptionniste chez ACS Group, elle orchestre l’accueil, l’assistanat administratif et la relation client. Elle garantit une communication professionnelle fluide et un suivi rigoureux des dossiers administratifs au quotidien.',
                'photo' => '/img/staff/1H5A0415.jpg',
                'is_director' => false,
            ],
        ];

        foreach ($members as $position => $member) {
            Staff::query()->updateOrCreate(
                ['name' => $member['name'], 'role' => $member['role']],
                [...$member, 'position' => $position],
            );
        }
    }
}
