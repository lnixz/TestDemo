// 抽象工厂

class MobilePhoneFactory {
    // 提供操作系统的接口   
    createOS() {
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
    }
    // 提供硬件的接口    
    createHardWare() {
        throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
    }
}

class FakeStarFactory extends MobilePhoneFactory {
    createOS() {
        return new AndroidOS();
    }

    createHardWare() {
        return new QualcommHardWare();
    }
}

class OS {
    controlHardWare() {
        throw new Error("抽象产品方法不允许直接调用，你需要将我重写！");
    }
}

class AndroidOS extends OS {
    controlHardWare() {
        console.log('我会用安卓的方式去操作硬件');
    }
}

class AppleOS extends OS {
    controlHardWare() {
        console.log('我会用🍎的方式去操作硬件');
    }
}

class HardWare {
    operateByOrder() {
        throw new Error("抽象产品方法不允许直接调用，你需要将我重写！");
    }
}

class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('我会用高通的方式去运转')
    }
}

class MiWare extends HardWare {
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
}

const myPhone = new FakeStarFactory();

const myOS = myPhone.createOS();

const myHardWare = myPhone.createHardWare();

myOS.controlHardWare();
myHardWare.operateByOrder();