# Pré-requis pour lancer les TP sous Windows

Compatibilité: Windows 7 et Windows 8.1

## NodeJS

Installer nodejs et npm depuis: https://nodejs.org

## Git

Installez Git for Windows: https://git-for-windows.github.io/

## Récupération des sources - WINDOWS

Lancez l'invite de commande git bash rendez vous à la racine de votre disque:

    cd C:/

C'est important car la taille des chemins est limitée sous Windows.

Ensuite, clonez les sources du projet depuis le répertoire racine:

    git clone https://github.com/Toub/angular-practice-1.4.git


## Terminal multi-onglets

Comme vous allez devoir lancer plusieurs programmes en même temps, il peut être utile d'utiliser un terminal multi onglets comme https://github.com/Maximus5/ConEmu


## Proxy cache npm_lazy

npm_lazy permet de gérer les problèmes réseaux et de conserver en cache les paquets déjà téléchargés.

Installation:

    npm install npm_lazy
    
### Lancement du serveur proxy:

Si vous n'êtes pas le premier à installer npm_lazy, recopier le répertoire contenant les fichiers mis en cache depuis le poste d'un collègue.

Ce répertoire nommé .npm_lazy se trouve dans votre répertoire personnel (par exemple ~/.npm_lazy).

Note: ~ représente votre répertoire personnel, par exemple C:/Users/toto

Depuis le répertoire angular-practice-1.4 (dans lequel se trouve le fichier de configuration npm_lazy_config.js):

    npm_lazy --config ./npm_lazy_config.js
    
Le serveur démarre alors sur le port 8077.

Test depuis un autre onglet (ou autre terminal):

    npm --registry http://localhost:8077/ install connect

Vérifier que le répertoire de cache  (par exemple ~/.npm_lazy) contient des fichiers.

Configuration de NPM pour utiliser npm_lazy de façon permanente:

    npm config set registry http://localhost:8077/
    
## Installation des dépendances du projet

    npm install
    
## Installation de bower

    npm install -g bower
    
## Installation des librairies
    
Si vous n'êtes pas le premier à installer bower, recopier le répertoire contenant les fichiers mis en cache depuis le poste d'un collègue.

Ils se trouvent dans: ~/.cache/bower/
    
Ouvrir une invite de commande git bash.

Si le proxy d'entreprise est trop restrictif, on peut demander à git d'utiliser https au lieu de git :
   
  git config --global url."https://".insteadOf git:// 
  
Puis lancer l'installation des librairies de l'application:

    cd C:/angular-practice-1.4
    bower install
    
## Installation de gulp

    npm install -g gulp
    
## Exécutez l'application

    gulp
    
## Ouvez l'application

Dans un navigateur, ouvrez http://localhost:3000



