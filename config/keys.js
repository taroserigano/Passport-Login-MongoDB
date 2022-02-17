// dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

dbPassword = 'mongodb+srv://test:test@cluster1.ll7jf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = {
    mongoURI: dbPassword
};
