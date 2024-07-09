## Description

Ceci est une API simple pour la gestion d'une liste de tâches, construite avec Express.js et Supabase. Elle permet de créer, lire, mettre à jour et supprimer des tâches.

## Table des Matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Endpoints](#endpoints)
  - [Obtenir les Tâches](#obtenir-les-tâches)
  - [Créer une Tâche](#créer-une-tâche)
  - [Mettre à Jour une Tâche](#mettre-à-jour-une-tâche)
  - [Supprimer une Tâche](#supprimer-une-tâche)
- [Variables d'Environnement](#variables-denvironnement)

## Installation

1. Clonez le dépôt
   ```bash
   git clone <url-du-depot>
   cd <nom-du-dossier>
   ```
2. Installez les dépendances
   ```bash
   npm install
   ```
3. Créez un fichier `.env` à la racine du projet et ajoutez vos informations de connexion Supabase
   ```plaintext
   SUPABASE_URL=your_supabase_url
   SUPABASE_API_KEY=your_supabase_api_key
   PORT=3000
   ```

## Utilisation

1. Démarrez le serveur
   ```bash
   npm start
   ```
2. L'API sera disponible sur `http://localhost:3000`

## Endpoints

### Obtenir les Tâches

- **URL** : `/api/todos`
- **Méthode** : `GET`
- **Description** : Récupère toutes les tâches triées par date de création (de la plus récente à la plus ancienne).
- **Réponse** :
  ```json
  [
    {
      "id": 1,
      "title": "Titre de la tâche",
      "descriptions": "Description de la tâche",
      "isFait": false,
      "statut": "en cours",
      "created_at": "2024-07-09T12:34:56.789Z"
    },
    ...
  ]
  ```

### Créer une Tâche

- **URL** : `/api/todos`
- **Méthode** : `POST`
- **Description** : Crée une nouvelle tâche.
- **Corps de la Requête** :
  ```json
  {
    "title": "Titre de la tâche",
    "descriptions": "Description de la tâche",
    "isFait": false,
    "statut": "en cours"
  }
  ```
- **Réponse** :
  ```json
  {
    "id": 2,
    "title": "Titre de la tâche",
    "descriptions": "Description de la tâche",
    "isFait": false,
    "statut": "en cours",
    "created_at": "2024-07-09T12:34:56.789Z"
  }
  ```

### Mettre à Jour une Tâche

- **URL** : `/api/todos/:id`
- **Méthode** : `PUT`
- **Description** : Met à jour une tâche existante.
- **Paramètres de l'URL** : `id` - ID de la tâche à mettre à jour.
- **Corps de la Requête** :
  ```json
  {
    "title": "Titre mis à jour de la tâche",
    "descriptions": "Description mise à jour de la tâche",
    "isFait": true,
    "statut": "terminé"
  }
  ```
- **Réponse** :
  ```json
  {
    "id": 2,
    "title": "Titre mis à jour de la tâche",
    "descriptions": "Description mise à jour de la tâche",
    "isFait": true,
    "statut": "terminé",
    "created_at": "2024-07-09T12:34:56.789Z"
  }
  ```

### Supprimer une Tâche

- **URL** : `/api/todos/:id`
- **Méthode** : `DELETE`
- **Description** : Supprime une tâche existante.
- **Paramètres de l'URL** : `id` - ID de la tâche à supprimer.
- **Réponse** : `204 No Content`

## Variables d'Environnement

- `SUPABASE_URL` : URL de votre instance Supabase.
- `SUPABASE_API_KEY` : Clé API de votre instance Supabase.
- `PORT` : Port sur lequel le serveur écoute (par défaut `3000`).

---

Cela couvre les bases de l'installation, de l'utilisation et des points de terminaison de votre API de liste de tâches.
