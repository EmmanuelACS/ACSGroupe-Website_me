<?php

namespace App\Http\Controllers\Admin\Concerns;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

// Déplace les visuels téléversés depuis le back-office directement dans
// public/img/<dossier>, conformément aux emplacements déjà utilisés par le
// site public (public/img/staff, public/img/gallery, public/img/slideshow).
trait StoresPublicImage
{
    protected function storePublicImage(UploadedFile $file, string $folder): string
    {
        $filename = Str::uuid()->toString().'.'.$file->getClientOriginalExtension();
        $file->move(public_path("img/{$folder}"), $filename);

        return "/img/{$folder}/{$filename}";
    }
}
