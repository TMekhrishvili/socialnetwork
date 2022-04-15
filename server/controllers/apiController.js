const signUp = (req, res) => {
    const user = req.body;
    console.log(user);
    res.redirect('/auth/sign-in');
}

module.exports = {
    signUp
}
