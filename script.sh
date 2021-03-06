#!/bin/bash

echo "-- Creation de l'application TechForum pour la mise production --"

if test -d www; then
	echo ""
else
	mkdir www
fi

echo "Creation des repertoires"
mkdir www/
mkdir www/app
mkdir www/app/css
mkdir www/app/data
mkdir www/app/img
mkdir www/app/js
mkdir www/app/libs
mkdir www/app/libs/angular-resource
mkdir -p www/app/libs/ionic/release/css
mkdir -p www/app/libs/ionic/release/js
mkdir -p www/app/libs/ionic/release/fonts
mkdir www/app/views

echo "Copie des fichiers html"
cp dev/app/*.html www/app
cp -r dev/app/views/* www/app/views

echo "Copie des data"
cp -r dev/app/data/* www/app/data
echo "Copie des images"
cp -r dev/app/img/* www/app/img

echo "Copie des  autres fichier "
cp -r dev/app/css/* www/app/css
cp -r dev/app/js/* www/app/js
cp -r dev/app/libs/angular-resource/angular-resource.min.js www/app/libs/angular-resource
cp -r dev/app/libs/ionic/release/fonts/* www/app/libs/ionic/release/fonts
cp -r dev/app/libs/ionic/release/css/ionic.min.css www/app/libs/ionic/release/css
cp -r dev/app/libs/ionic/release/js/ionic.bundle.min.js www/app/libs/ionic/release/js

echo "-- L'application TechForum contenu dans le dossier \"www\" peut �tre mise en production --"