const msg: string = 'typescript';

function sayHello(m: string) {
    let content: string = `hellos, ${m}`;
    console.log(content)

    document.write(content)
}

sayHello(msg);