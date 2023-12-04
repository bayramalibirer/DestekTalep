export default function (errorCode){
    switch(errorCode){
        case"auth/invalid-email":
            return "geçersiz e-posta adresi";
        case"auth/invalid-credential":
            return "Kimlik doğrulanamadı";
        case"auth/email-already-exists":
            return "E-posta zaten kullanılıyor";
        case"auth/invalid-email":
            return "geçersiz e-posta adresi";
        case"auth/invalid-password":
            return "geçersiz şifre";
        case"auth/weak-password":
            return "şifre çok zayıf";
        case"auth/user-not-found":
            return "Kullanıcı bulunamadı";
        default:
            return errorCode;
    }

}