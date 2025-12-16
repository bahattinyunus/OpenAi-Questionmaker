import React, { useState, useEffect } from 'react';
import { OpenAI } from 'openai';
import axios from 'axios';
import './styles.css';

function App() {
  const [generatedQuestion, setGeneratedQuestion] = useState('');
  const [formData, setFormData] = useState({
    soru: '',
    dogru_cevap: '',
    yanlis_cevap1: '',
    yanlis_cevap2: '',
    yanlis_cevap3: '',
    tur: '',
    zorluk_seviyesi: 1, 
  });

  const [questionCount, setQuestionCount] = useState(1); // Soru sayısını saklamak için kullanılır

  const apiKey = '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'; 

  const api = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });

  const createAndSendQuestion = async () => {
    const soru = `
Bana lütfen bir soru üret. Sorunun konuları tarih, bilim, mantık matematik, felsefe, genel kültür veya futbol ile ilgili olabilir. Soruları olabildiğince zor ve detaylı sor. Temel sorular yerine daha ileri seviye sorular oluşturmanı rica ediyorum.

Zorluk seviyesini belirtirken, 1 ila 5 arasında bir puanlama yaparak soruyu bu zorluk derecesine göre ayarlayabilirsiniz. Örneğin:
soruyu bu düzende yaz 
|Soru| |Doğru cevap| |Yanlış cevap 1| |Yanlış cevap 2| |Yanlış cevap 3| |Tür| |Zorluk seviyesi| örnek soru 
|Kösedağ Savaşı hangi iki devlet arasında gerçekleşti?| |Anadolu Selçuklu-Moğol| |Gazneli-Selçuklu| |Azerbaycan-Ermenistan| |Nijerya-Bangladeş| |Tarih| |4|`;

    try {
      setTimeout(async () => {
      const completion = await api.chat.completions.create({
        messages: [{ role: 'system', content: soru }, { role: 'user', content: '' }],
        model: 'gpt-3.5-turbo-16k-0613',
      });

      const aiResponse = completion.choices[0].message.content;
      console.log(`AI: ${aiResponse}`);
      const veriler = aiResponse.split('|');

      const a = veriler[1];
      const dogru_cevap = veriler[3];
      const yanlis_cevap_1 = veriler[5];
      const yanlis_cevap_2 = veriler[7];
      const yanlis_cevap_3 = veriler[9];
      const tur = veriler[11];
      const zorlukSeviyesi = veriler[13];

      setFormData({
        soru: a,
        dogru_cevap,
        yanlis_cevap1: yanlis_cevap_1,
        yanlis_cevap2: yanlis_cevap_2,
        yanlis_cevap3: yanlis_cevap_3,
        tur,
        zorluk_seviyesi: parseInt(zorlukSeviyesi, 10),
      });

      return aiResponse;
    },3000)
    } catch (error) {
      console.error('Hata oluştu:', error);
      return '';
    }
  };

  const handleAddQuestion = async () => {
    try {
      const response1 = await axios.post('http://localhost:5000/create_question', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response1.data);
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
  
    handleNewQuestion();
  };

  const handleNewQuestion = async () => {
    const generatedQuestion = await createAndSendQuestion();
    setGeneratedQuestion(generatedQuestion);
  
  
  };

  const handleGenerateMultipleQuestions = async () => {
    // Soru sayısı kadar soru oluştur ve veritabanına ekle
    for (let i = 0; i < questionCount; i++) {
      await handleAddQuestion();
    }
  };

  useEffect(() => {
    createAndSendQuestion();
  }, []);

  return (
    <div className="App">
      <h1>Soru Oluşturma Uygulaması</h1>
      <div className="question-box" >
       
      </div>
      <div className="input-box">
        <label htmlFor="soru">Soru</label>
        <input
          className="two-line-textarea"
          type="text"
          id="soru"
          placeholder="Soru"
          value={formData.soru}
          onChange={(e) => setFormData({ ...formData, soru: e.target.value })}
          
       />
        <label htmlFor="dogru_cevap">Doğru Cevap</label>
        <input
          type="text"
          id="dogru_cevap"
          placeholder="Doğru Cevap"
          value={formData.dogru_cevap}
          onChange={(e) => setFormData({ ...formData, dogru_cevap: e.target.value })}
        />
        <label htmlFor="yanlis_cevap1">Yanlış Cevap 1</label>
        <input
          type="text"
          id="yanlis_cevap1"
          placeholder="Yanlış Cevap 1"
          value={formData.yanlis_cevap1}
          onChange={(e) => setFormData({ ...formData, yanlis_cevap1: e.target.value })}
        />
        <label htmlFor="yanlis_cevap2">Yanlış Cevap 2</label>
        <input
          type="text"
          id="yanlis_cevap2"
          placeholder="Yanlış Cevap 2"
          value={formData.yanlis_cevap2}
          onChange={(e) => setFormData({ ...formData, yanlis_cevap2: e.target.value })}
        />
        <label htmlFor="yanlis_cevap3">Yanlış Cevap 3</label>
        <input
          type="text"
          id="yanlis_cevap3"
          placeholder="Yanlış Cevap 3"
          value={formData.yanlis_cevap3}
          onChange={(e) => setFormData({ ...formData, yanlis_cevap3: e.target.value })}
        />
        <label htmlFor="tur">Tür</label>
        <input
          type="text"
          id="tur"
          placeholder="Tür"
          value={formData.tur}
          onChange={(e) => setFormData({ ...formData, tur: e.target.value })}
        />
        <label htmlFor="zorluk_seviyesi">Zorluk Seviyesi</label>
        <input
          type="number"
          id="zorluk_seviyesi"
          placeholder="Zorluk Seviyesi"
          value={formData.zorluk_seviyesi}
          onChange={(e) =>
            setFormData({ ...formData, zorluk_seviyesi: parseInt(e.target.value, 10) })
          }
        />
        <label htmlFor="soru_sayisi">Soru Sayısı</label>
        <input
          type="number"
          id="soru_sayisi"
          placeholder="Soru Sayısı"
          value={questionCount}
          onChange={(e) => setQuestionCount(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="buttons">
        <button onClick={handleNewQuestion}>Yeni Soru</button>
        <button onClick={handleAddQuestion}>Soru Ekle</button>
        <button onClick={handleGenerateMultipleQuestions}>Çoklu Soru Oluştur</button>
      </div>
    </div>
  );
}

export default App;
