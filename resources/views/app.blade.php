<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <script>
        (function () {
            try {
                var saved = localStorage.getItem('acs-theme');
                if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                }
            } catch (e) {}
        })();
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    {{-- bootstrap grid css --}}
    <link rel="stylesheet" href="{{ asset('css/plugins/bootstrap-grid.css') }}">
    {{-- font awesome css --}}
    <link rel="stylesheet" href="{{ asset('css/plugins/font-awesome.min.css') }}">
    {{-- swiper css --}}
    <link rel="stylesheet" href="{{ asset('css/plugins/swiper.min.css') }}">
    {{-- main css --}}
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    {{-- ACS custom additions (nav toggles) --}}
    <link rel="stylesheet" href="{{ asset('css/acs-custom.css') }}">
    {{-- dark mode overrides --}}
    <link rel="stylesheet" href="{{ asset('css/dark-mode.css') }}">

    <meta name="description" content="Access Technologies Solution (ACS) — Accelerating Networks. Ne réagissez plus, anticipez.">
    <meta property="og:title" content="Access Technologies Solution (ACS) - Accelerating Networks">
    <meta property="og:description" content="Access Technologies Solution (ACS) — Accelerating Networks. Ne réagissez plus, anticipez.">
    <meta property="og:type" content="website">

    {{-- favicon : pictogramme ACS Group carré 1:1, sans texte (public/img/acs-icon.png), cache invalidé via ?v= --}}
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/acs-icon.png') }}?v=3">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/acs-icon.png') }}?v=3">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/acs-icon.png') }}?v=3">
    <link rel="manifest" href="{{ asset('favicon/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('favicon/safari-pinned-tab.svg') }}" color="#F73636">
    <meta name="msapplication-TileColor" content="#F73636">
    <meta name="theme-color" content="#ffffff">

    @routes
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
