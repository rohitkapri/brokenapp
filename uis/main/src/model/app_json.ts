
        import { app_object_type } from "../broken-types/app";

        const APP_JSON: app_object_type = {
    "version": 2,
    "id": "aq4am3",
    "name": "demo",
    "description": "",
    "logo_url": "https://brokenatom.io/favicon.svg",
    "models": [
        {
            "version": 1,
            "name": "user",
            "id": "vjnou",
            "ns": "01hw85eh5jjr27r8cym4njxz3g",
            "hash_id": "b08ef8286e2196a2263bec3e8e6f7530ad1f6b36",
            "primarykey": "id",
            "source": "default",
            "created_at": 1713966105794,
            "created_by": "default",
            "updated_at": 1713966105794,
            "updated_by": "default",
            "deployed_at": 1713966105794,
            "props": [
                {
                    "id": "01hw85eh62q51md4x1ws0f5t13",
                    "prop_id": "email:email:!",
                    "name": "email",
                    "type": "email",
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "is_searchable": false,
                    "is_indexable": false,
                    "constraints": ""
                },
                {
                    "id": "01hw85eh62vnfdffhw64gjea35",
                    "prop_id": "name:text:!",
                    "name": "name",
                    "type": "text",
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "is_searchable": false,
                    "is_indexable": false,
                    "constraints": ""
                },
                {
                    "id": "01hw85eh62a2krt896wcgx02g4",
                    "prop_id": "images:image:s",
                    "name": "images",
                    "type": "image",
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_required": false,
                    "is_many": true,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "is_searchable": false,
                    "is_indexable": false,
                    "constraints": ""
                },
                {
                    "id": "01hw85eh62tbderq65cqbgy4dt",
                    "prop_id": "id:serial:!u",
                    "name": "id",
                    "type": "serial",
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": true,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "is_searchable": false,
                    "is_indexable": false,
                    "constraints": ""
                },
                {
                    "id": "01hw85eh625hg1ya4xwtxajtf7",
                    "prop_id": "created_at:datetime:!",
                    "name": "created_at",
                    "type": "datetime",
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "is_searchable": false,
                    "is_indexable": false,
                    "constraints": ""
                },
                {
                    "id": "01hw85eh625yjpgc5pb0fetqks",
                    "name": "created_by",
                    "type": "vjnou",
                    "is_relation": true,
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_indexable": false,
                    "is_required": true,
                    "prop_id": "created_by:vjnou:!",
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_searchable": false,
                    "constraints": ""
                },
                {
                    "id": "01hw85eh62wzm910c4bxfa272p",
                    "prop_id": "updated_at:datetime:!",
                    "name": "updated_at",
                    "type": "datetime",
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "is_searchable": false,
                    "is_indexable": false,
                    "constraints": ""
                },
                {
                    "id": "01hw85eh62gb4wyjzfs4411gar",
                    "name": "updated_by",
                    "type": "vjnou",
                    "is_relation": true,
                    "created_at": 1713966105794,
                    "created_by": "default",
                    "updated_at": 1713966105794,
                    "updated_by": "default",
                    "is_indexable": false,
                    "is_required": true,
                    "prop_id": "updated_by:vjnou:!",
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_searchable": false,
                    "constraints": ""
                }
            ],
            "db": {},
            "documentation": "Basic User model"
        },
        {
            "version": 1,
            "name": "testcontact",
            "id": "zjdfg",
            "ns": "aq4am3",
            "hash_id": "add236e8fee3f0e6ae6b7628da5646f38816440f",
            "primarykey": "id",
            "source": "default",
            "created_at": 1736138759469,
            "created_by": "default",
            "updated_at": 1736138759469,
            "updated_by": "default",
            "deployed_at": 1736138759469,
            "props": [
                {
                    "id": "gc7fe",
                    "prop_id": "services:many_of:!",
                    "name": "services",
                    "type": "many_of",
                    "created_at": 1736138892197,
                    "created_by": "user",
                    "updated_at": 1736139005161,
                    "updated_by": "user",
                    "options": [
                        "hi",
                        "hello",
                        "hey"
                    ],
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "constraints": "",
                    "documentation": ""
                },
                {
                    "id": "xpyvb",
                    "prop_id": "image:image:!",
                    "name": "image",
                    "type": "image",
                    "created_at": 1736138819327,
                    "created_by": "user",
                    "updated_at": 1736138889796,
                    "updated_by": "user",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "constraints": "",
                    "documentation": ""
                },
                {
                    "id": "fjkug",
                    "prop_id": "name:text:!",
                    "name": "name",
                    "type": "text",
                    "created_at": 1736138781674,
                    "created_by": "user",
                    "updated_at": 1736138810939,
                    "updated_by": "user",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_range": false,
                    "is_json": false,
                    "is_relation": false,
                    "constraints": "",
                    "documentation": ""
                },
                {
                    "id": "hcyja",
                    "prop_id": "id:serial:!u",
                    "name": "id",
                    "type": "serial",
                    "created_at": 1736138759469,
                    "created_by": "default",
                    "updated_at": 1736138759469,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": true,
                    "is_relation": false
                },
                {
                    "id": "zjah1",
                    "prop_id": "created_at:datetime:!",
                    "name": "created_at",
                    "type": "datetime",
                    "created_at": 1736138759469,
                    "created_by": "default",
                    "updated_at": 1736138759469,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_relation": false
                },
                {
                    "id": "czsb3",
                    "name": "created_by",
                    "type": "vjnou",
                    "is_relation": true,
                    "relation_type": "MANY-ONE",
                    "created_at": 1736138759469,
                    "created_by": "default",
                    "updated_at": 1736138759469,
                    "updated_by": "default",
                    "is_required": true,
                    "prop_id": "created_by:user:!",
                    "is_unique": false,
                    "is_many": false
                },
                {
                    "id": "04dyf",
                    "prop_id": "updated_at:datetime:!",
                    "name": "updated_at",
                    "type": "datetime",
                    "created_at": 1736138759469,
                    "created_by": "default",
                    "updated_at": 1736138759469,
                    "updated_by": "default",
                    "is_required": true,
                    "is_many": false,
                    "is_unique": false,
                    "is_relation": false
                },
                {
                    "id": "ya2rx",
                    "name": "updated_by",
                    "type": "vjnou",
                    "is_relation": true,
                    "relation_type": "MANY-ONE",
                    "created_at": 1736138759469,
                    "created_by": "default",
                    "updated_at": 1736138759469,
                    "updated_by": "default",
                    "is_required": true,
                    "prop_id": "updated_by:user:!",
                    "is_unique": false,
                    "is_many": false
                }
            ],
            "db": {},
            "documentation": ""
        }
    ],
    "apis": {},
    "authz": {
        "app": {
            "role": {
                "admin": [
                    "create",
                    "delete",
                    "update",
                    "read"
                ],
                "user": [
                    "create",
                    "read",
                    "delete"
                ],
                "public": [
                    "read"
                ]
            },
            "resource": [],
            "attribute": []
        },
        "models": {
            "vjnou": {
                "role": {
                    "admin": [
                        "create",
                        "delete",
                        "update",
                        "read"
                    ],
                    "user": [
                        "create",
                        "read",
                        "delete"
                    ],
                    "public": []
                }
            },
            "zjdfg": {
                "role": {
                    "admin": [
                        "create",
                        "delete",
                        "update",
                        "read"
                    ],
                    "user": [
                        "create",
                        "read",
                        "delete"
                    ],
                    "public": [
                        "read"
                    ]
                },
                "resource": [
                    {
                        "rule": {
                            "lhs": "id",
                            "condition": "eq",
                            "rhs": "user.role.name"
                        },
                        "permissions": {
                            "admin": [
                                "create",
                                "delete",
                                "update",
                                "read"
                            ],
                            "user": [
                                "create",
                                "read",
                                "delete"
                            ],
                            "public": [
                                "read"
                            ]
                        }
                    }
                ],
                "attribute": []
            }
        }
    },
    "infra": "STANDARD",
    "roles": [
        "admin",
        "user",
        "public"
    ],
    "owner": {
        "version": 2,
        "id": "676929ecd9e49b02348dcc7f00d07ef8",
        "name": "Rohit",
        "role": "user",
        "level": 2,
        "app_id": "BROKEN",
        "created_at": 1733976318417,
        "verified_at": 1733976318399,
        "email": "Rohit@brokenatom.io",
        "created_with": "email",
        "updated_at": 1735274892467,
        "exp": 1737866892,
        "iat": 1735274892
    },
    "collaborators": [],
    "branches": {
        "dev": {
            "id": "dev",
            "name": "dev"
        },
        "test": {
            "id": "test",
            "name": "test"
        },
        "prod": {
            "id": "prod",
            "name": "prod"
        }
    },
    "uis": [
        {
            "id": "main",
            "name": "main",
            "title": "V2 UI",
            "login_methods": {
                "version": 2,
                "email": true
            },
            "login": {
                "type": "none"
            },
            "broken_subdomains": [],
            "domains": [
                {
                    "domain": "blog.atombrokenatom.site"
                },
                {
                    "domain": "atombrokenatom.site"
                },
                {
                    "domain": "www.sayitoutloud.online"
                },
                {
                    "domain": "sayitoutloud.com"
                }
            ]
        }
    ],
    "secret": {
        "key": "secret-key"
    },
    "db_type": {
        "type": "entity",
        "level": [
            "application"
        ]
    },
    "creator": {
        "version": 2,
        "id": "4aadf0a0a75957cbaba0ac547496cef2",
        "role": "user",
        "level": 2,
        "app_id": "BROKEN",
        "created_at": 1723200996570,
        "verified_at": 1723200996570,
        "email": "ashish@brokenatom.io",
        "created_with": "email",
        "exp": 1723805796,
        "iat": 1723200996
    },
    "login": {
        "type": "public",
        "default_role": "admin"
    }
};
        export default APP_JSON;
    