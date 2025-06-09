fx_version "cerulean"

game "gta5"

author "w1gs"
version "1.0.0"
description "NControl UI"

lua54 "yes"

ui_page "build/index.html"
-- ui_page "http://localhost:3000/" --for dev

shared_script {
    "shared/config.lua"
}

client_script {
    "client/ui.lua",
    "client/utils.lua",
    "client/client.lua",
}

server_script {
    "server/**"
}

files {
    "build/**",
}
