async function main() {
    //メモ
    // SetColor("#0000ff");
    // DrawText("Hoge", 350, 150);
    // DrawText(100/6, 100, 100);

    //変数(メモリ, 記憶, 箱)
    // var x = 10;
    // x %= 2;
    // DrawText(`${x}`, 100, 100);
    // var hensuu = 100;
    // DrawText(hensuu, 300, 100);
    // for (let i = 0; i < 10; ++i){
    //     DrawText(i, 50*i+10, 100);
    // }

    //プログラムを止める
    // await Sleep(1000); //ミリ秒 1000ms = 1s
    // DrawText("a", 100, 100);
    // 無限ループ
    // SetColor("green");
    // DrawRect(0, 0, 100,100);
    // SetColor("black");
    // DrawRect(100, 0, 200,100);
    // SetColor("green");
    // DrawRect(200, 0, 300,100);
    // SetColor("black");
    // DrawRect(300, 0, 400,100);
    // DrawText("a", 100, 100);
    // await Sleep(1000);
    // SetColor("white");
    // DrawRect(0,0,800,600);
    // let cnt = 0;
    // while (true) {
    //     SetColor("black");
    //     DrawRect(0,0,800,600);
    //     SetColor("white");
    //     DrawText("text", cnt, 100);
    //     cnt += 1
    //     await Sleep(10);
    // }
    // if (2 == 2) {
    //     DrawText("a", 100, 100);
    // } else {
    //     DrawText("b", 100, 100);
    // }

    //SetFont("40px Arial");

    // while(true){
    //     //画面更新
    //     SetColor("white");
    //     DrawRect(0,0,800,600);
    //     //文字色変更
    //     SetColor("black");
    //     if (GetKey("Space")){
    //         DrawText("スペース押された", 100, 100);
    //     } else {
    //         DrawText("スペース押されない", 100, 100)
    //     }
    //     await Sleep(10);
    // }

    class Bullet {
        x = 100;
        y = 0;
    }
    var x = 400;
    var y = 600;
    let player_r = 5;
    let object_r = 10;
    let bullets = [];
    //たまを生成する
    // for (let cnt = 0; cnt < 10; ++cnt) {
    //     var bullet = new Bullet();
    //     bullet.x = Math.floor(Math.random() * 800);
    //     bullet.y = Math.floor(Math.random()*200) - 300;
    //     bullets.push(bullet)
    // }
    //文字の大きさ調整
    let player_speed = 5;
    let = score = 0;
    let highscore = 0;
    SetFont("50px Arial");
    while(true){
        //画面更新
        SetColor("gray");
        DrawRect(0,0,800,600);
        //文字色変更
        SetColor("red");
        if (GetKey("KeyW") || GetKey("ArrowUp")){
            y -= player_speed;
            if (y < 0){
                y = 0;
            }
        } if (GetKey("KeyS") || GetKey("ArrowDown")){
            y += player_speed;
            if (y > 600){
                y = 600;
            }
        } if (GetKey("KeyA") || GetKey("ArrowLeft")){
            x -= player_speed;
            if (x < 0){
                x = 0;
            }
        } if (GetKey("KeyD") || GetKey("ArrowRight")){
            x += player_speed;
            if (x > 800){
                x = 800;
            }
        }
        DrawCircle(x, y, player_r);

        //デモ用
        //objectをたまに変えたのでここを変更する
        var delete_index = [];
        for (let index = 0; index < bullets.length; ++index){
            var distance = ((x-bullets[index].x)**2 + (y - bullets[index].y)**2)**(1/2);
            if (distance < object_r + player_r) {
                SetColor("red");
                score = 0;
            } else {
                SetColor("black");
            }
            bullets[index].y += 1;
            DrawCircle(bullets[index].x, bullets[index].y, object_r);
            if (bullets[index].y > 700){
                //delete_index.push(index)
                bullets.splice(index, 1);
                index -= 1;
            }
        }
        // for (let i; i < delete_index.length; ++i){
        //     delete bullets[delete_index[i]];
        // }
        if (Math.random() < 0.05) {
            var bullet = new Bullet();
            bullet.x = Math.floor(Math.random() * 800);
            bullet.y = Math.floor(Math.random()*200) - 300;
            bullets.push(bullet)
        }
        score += 1;
        //スコア表示
        if (highscore < score){
            highscore = score;
        }
        SetColor("black");
        DrawText("SCORE", 600,50);
        DrawText(score, 600,100);
        DrawText("HIGHSCORE", 475,150);
        DrawText(highscore, 600,200);
        await Sleep(1);
    }

    //配列; リスト
    // var li = [1,2,3,4,5];
    // li[0] = 100;
    // DrawText(li, 100,100);
    // for (let cnt = 0; cnt < li.length; ++cnt){
    //     li[cnt] += 2;
    // }
    // DrawText(li, 100, 300);

    class Student {
        english = 50
        math = 50
    }
    var takahashi = new Student();
    DrawCircle(takahashi.english, takahashi.math, 10);
}