module.exports = (db) => {
    return {
        handleSignup(email, password) {
            db.saveUser({ email, password });
        }
    }
};