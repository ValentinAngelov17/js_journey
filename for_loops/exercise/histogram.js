function histogram(input) {
    let numbers = Number(input[0]);
    let p1=0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;

    for (i = 1; i <= numbers; i++) {
        let number = Number(input[i]);
        switch (number) {
            case number < 200:
                p1 += 1;
                break;
            case number >= 200 && number < 400:
                p2++;
                break;
            case number >= 400 && number < 600:
                p3++;
                break;
            case number >= 600 && number < 800:
                p4++;
                break;
            case number >= 800:
                p5++;
                break;
        }
    }
    console.log(`${p1 / 20 *100}%`);
}
histogram(["3",
"1",
"2",
"999"])
