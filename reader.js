const fetch = require('node-fetch');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const packet1 = ["growtopia1.com", "growtopia2.com"];
const packet2 = ["37", "38"];


function main() {
    const host = packet1[Math.floor(Math.random() * packet1.length)];
    const contentlength = packet2[Math.floor(Math.random() * packet2.length)];
    readline.question('Growtopia/server_data.php reader (c) Galvin\nIP Address : ', ip => {
        fetch("http://" + ip + "/growtopia/server_data.php", {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Host": host,
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": contentlength,
                "user-agent": ""
            },
            body: 'version=3%2E71&platform=0&protocol=146'
        }).then(data => data.text()).then(response => {
            console.log(response)
        })
    })
}

function execute() {
    try {
        main()
    } catch (error) {
        return console.log(error);
    }
}
execute()
