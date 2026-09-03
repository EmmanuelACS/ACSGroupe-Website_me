@component('mail::message')
# Nouveau message de contact

**Nom :** {{ $data['first_name'] }} {{ $data['last_name'] ?? '' }}
**Email :** {{ $data['email'] }}
@if(!empty($data['phone']))
**Téléphone :** {{ $data['phone'] }}
@endif
@if(!empty($data['company']))
**Société :** {{ $data['company'] }}
@endif
@if(!empty($data['role']))
**Rôle :** {{ $data['role'] }}
@endif
@if(!empty($data['product_design']))
**Besoin :** {{ $data['product_design'] }}
@endif
@if(!empty($data['budget']))
**Budget :** {{ $data['budget'] }}
@endif

## Message

{{ $data['message'] }}

@component('mail::subcopy')
Envoyé depuis le formulaire de contact du site.
@endcomponent
@endcomponent
