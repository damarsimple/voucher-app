const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');


const app = express()


const vouchers = new Map();
const voucherUsed = new Set();


app.use(express.json());
app.use(cors());

app.post('/vouchers/create', (req,res)  => {


    const gen = uuidv4();

    do {
        vouchers.set(gen,new Date())
    }while(!vouchers.has(gen));

    res.send({
        voucher : gen
    })

})


function isDateMoreThanThreeMonthsAhead(targetDate) {
  // Get the current date
  const currentDate = new Date();

  // Add 3 months to the current date
  const threeMonthsAhead = new Date(currentDate);
  threeMonthsAhead.setMonth(threeMonthsAhead.getMonth() + 3);

  // Compare the target date with the calculated date
  return targetDate > threeMonthsAhead;
}

app.post('/vouchers/use', (req,res)  => {
    
    const { voucher } = req.body
    
    console.log(voucher)

    if(voucherUsed.has(voucher)){
        
        return res.status(400).send({
            status : 'voucher is used'
        })
    }

    if(vouchers.has(voucher)){

        if(isDateMoreThanThreeMonthsAhead(vouchers.get(voucher))){

            return res.status(400).send({
                status : 'voucher is expired'
            })

        }

        voucherUsed.add(voucher);

        return res.status(200).send({
            status : 'voucher is ok'
        })

    }

      
    return res.status(404).send({
        status : 'voucher is not found'
    })

})

app.listen(3005, () => console.log('listening on port 3005'))