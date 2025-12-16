const axios = require('axios');
const { openai } = require('openai');

const api = new openai({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

async function createAndSendQuestion() {
  const soru =
    'Bana 1 adet soru üret. sorunun konuları tarih, coğrafya, bilim, mantık matematik ve futbol ile alakalı olsun. soruları olabildiğince zor sor. temel sorular olmasın. zorluk seviyesini belirtirken 1 ila 5 arasında belirt bu şekilde yazmanı isitiyorum senden soruyu iki düz çizgi arasına yaz  |Soru| |Doğru cevap| |Yanlış cevap 1| |Yanlış cevap 2| |Yanlış cevap 3| |Tür| |Zorluk seviyesi| örnek verecek olursam |2+2 kaç eder| | 4 | | 5| |7| | 10| | matematik | | 1|';

  try {
    const completion = await api.createCompletion({
      prompt: soru,
      model: 'gpt-3.5-turbo'
    });

    const aiResponse = completion.choices[0].text;
    console.log(`AI: ${aiResponse}`);
    const veriler = aiResponse.split('|');

    const a = veriler[1];
    const dogru_cevap = veriler[3];
    const yanlis_cevap_1 = veriler[5];
    const yanlis_cevap_2 = veriler[7];
    const yanlis_cevap_3 = veriler[9];
    const tur = veriler[11];
    const zorlukSeviyesi = veriler[13];

    console.log(a);
    console.log(dogru_cevap);
    console.log(yanlis_cevap_1);
    console.log(yanlis_cevap_2);
    console.log(yanlis_cevap_3);
    console.log(tur);
    console.log(zorlukSeviyesi);

    const formData = new FormData();

    formData.append('soru', a);
    formData.append('dogru_cevap', dogru_cevap);
    formData.append('yanlis_cevap1', yanlis_cevap_1);
    formData.append('yanlis_cevap2', yanlis_cevap_2);
    formData.append('yanlis_cevap3', yanlis_cevap_3);
    formData.append('tur', tur);
    formData.append('zorluk_seviyesi', zorlukSeviyesi);

    const response1 = await axios.post(
      'http://localhost:5000/create_question',
      formData
    );

    console.log(response1.data);
    return a; // Oluşturulan soruyu döndür
  } catch (error) {
    console.error('Hata oluştu:', error);
    throw error;
  }
}

module.exports = { createAndSendQuestion };
