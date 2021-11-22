class Mobile {

    phoneName = "Mi"            // global variable
    #unlockpin = 1234           // this variable is private cannot use out of the class

    makeCall() {
        console.log("Calling someone...")
    }
    
    sendSms() {
        console.log("sending...")
    }

    get getUnlockpin () {
    return this.#unlockpin
    }

    set unlockpin(value){
        this.#unlockpin = value
    }
}

let  myMobile = new Mobile();
myMobile.sendSms()
console.log(myMobile.phoneName)
console.log(myMobile.getUnlockpin)
myMobile.unlockpin = 3214;
console.log(myMobile.getUnlockpin)
