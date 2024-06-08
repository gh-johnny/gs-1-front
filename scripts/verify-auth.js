const tokenName = '@OceanGuardians:token'

function verifyAuth() {
    const token = sessionStorage.getItem(tokenName)

    if (!token) return window.location.href = 'index.html';
}

verifyAuth()
