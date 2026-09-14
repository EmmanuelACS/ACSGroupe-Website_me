<?php

namespace App\Http\Controllers\Admin\Concerns;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

// Déplace les visuels téléversés depuis le back-office dans public/uploads/<dossier>,
// un unique répertoire dédié aux uploads admin — distinct de public/img (assets
// statiques versionnés dans Git : logos, icônes, illustrations partenaires) —
// afin qu'un seul volume Railway (monté sur /app/public/uploads) suffise à
// rendre TOUTES les images admin persistantes d'un déploiement à l'autre.
trait StoresPublicImage
{
    protected function storePublicImage(UploadedFile $file, string $folder): string
    {
        $filename = Str::uuid()->toString().'.'.$file->getClientOriginalExtension();
        $file->move(public_path("uploads/{$folder}"), $filename);

        return "/uploads/{$folder}/{$filename}";
    }
}
