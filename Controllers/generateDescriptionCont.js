const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateDescription = async (req, res) => {

    try {
        const { name, category, productType, size, color } = req.body
        if (!name || !category || !productType || !size || !color) {
          return  res.status(400).json({
                "message": "please provide the required fields"
            })
        }
        else {

            const prompt = `in not more than 3 sentences generate a ecommerce store production description with the following product details ${name}, ${category}, ${productType}, ${size}, ${color} `

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
        
            res.status(200).json({ "description": text })

        }
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }


}

module.exports = generateDescription