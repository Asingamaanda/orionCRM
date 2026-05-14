ROLE_PERMISSIONS = {
    "Admin": {"*"},
    "Operations": {"dashboard", "tasks", "whatsapp", "notifications"},
    "Marketing": {"content-ops", "attribution", "campaigns"},
    "Legal Staff": {"dashboard", "leads", "tasks"},
    "SEO": {"seo-growth", "seo-automation", "engineering"},
    "Executive": {"executive", "dashboard", "analytics", "reporting"},
}


def can_access(role: str, module: str) -> bool:
    perms = ROLE_PERMISSIONS.get(role, set())
    return "*" in perms or module in perms
