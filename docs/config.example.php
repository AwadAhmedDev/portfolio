<?php
// MODÈLE de private/config.php (architecture.md §8.1) — aucune vraie valeur ici.
//
// Où le déposer : hPanel › Gestionnaire de fichiers ›
//   domains/rustic-yellowgreen-woodcock-94.hostingersite.com/private/config.php
//   (dossier « private » à créer à côté de public_html, PAS dedans), droits 600.
// Ne jamais le commiter, ni l'envoyer par message : il contient une clé secrète.

return [
    // Clé d'API Resend (resend.com › API Keys › « Create API Key », droit « Sending access »). Commence par « re_ ».
    'resend_cle' => 're_REMPLACER_PAR_LA_CLE',

    // Adresse qui reçoit les messages du formulaire. Tant qu'aucun domaine n'est vérifié chez Resend,
    // ce doit être l'adresse e-mail du compte Resend (sinon Resend refuse l'envoi).
    'destinataire' => 'REMPLACER@exemple.fr',

    // Expéditeur affiché. Adresse de test de Resend, utilisable sans domaine vérifié.
    'expediteur' => 'Portfolio <onboarding@resend.dev>',

    // Adresse exacte du site (protocole + domaine, sans « / » final) : seules ses pages peuvent envoyer le formulaire.
    'origine' => 'https://rustic-yellowgreen-woodcock-94.hostingersite.com',

    // Clé aléatoire de 64 caractères hexadécimaux (32 octets), pour l'empreinte des adresses IP.
    // À générer une fois, par exemple dans PowerShell :
    //   -join ((1..32) | ForEach-Object { '{0:x2}' -f (Get-Random -Maximum 256) })
    'cle_hmac' => 'REMPLACER_PAR_64_CARACTERES_HEXADECIMAUX',
];
