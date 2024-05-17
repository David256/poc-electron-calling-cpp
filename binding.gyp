{
    "targets": [
        {
            "target_name": "addons",
            "sources": ["src-cpp/addons.cpp"],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').targets\"):node_addon_api",
            ]
        }
    ]
}