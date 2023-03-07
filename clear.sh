#!/bin/bash

chown 1000:1000 -R vendor
chown 1000:1000 -R composer.lock
rm -rf cadastro_simples/web/assets/*
rm -rf cadastro_simples/runtime/cache/*
rm -rf cadastro_simples/runtime/debug/*
rm -rf cadastro_simples/runtime/logs/*
rm -rf cadastro_simples/runtime/mpdf/*
rm -rf cadastro_simples/runtime/mail/*
rm -rf cadastro_simples/console/runtime/logs/*
chmod 777 -R cadastro_simples/web
chmod 777 -R cadastro_simples/web/assets
chmod 777 -R cadastro_simples/runtime
chmod 777 -R cadastro_simples/modules
chmod 777 -R cadastro_simples/migrations
chmod 777 -R cadastro_simples/config
chmod 777 -R cadastro_simples/console
