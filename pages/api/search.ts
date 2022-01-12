
const fs = require('fs');
export default function (req, res) {
    let text = fs.readFileSync('user.json', 'utf-8')

    let userData = req.body.name
    
    switch (req.method) {
        case 'POST':
            console.log('POSTしたよ');

                fs.writeFile('user.json', JSON.stringify(userData, null, " "));
            res.status(200).json(text);
            
            break;
            case 'GET':
                console.log('GETしたよ');
                text = fs.readFileSync('user.json', 'utf-8')
                res.status(200).json(text);
                break;
            }


}