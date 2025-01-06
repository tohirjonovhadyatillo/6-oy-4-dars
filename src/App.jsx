import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app"> 
      <NameList />
      <ReverseText />
      <ShowPassword />
      <ColorPicker />
      <PersonalInfoForm />
      <DynamicInputs />
      <VotingSystem />
      <Calculator />
      <FormValidation />
      <TermsAgreement />
    </div>
  );
}

function NameList() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  function addName() {
    if (name !== '') {
      setNames([...names, name]);
      setName('');
    }
  }

  function clearNames() {
    setNames([]);
  }

  return (
    <div className="name-list">
      <h2>Ismlar royxati</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ismni kiriting"
      />
      <button onClick={addName}>Qo'shish</button>
      <button onClick={clearNames}>Tozalash</button>
      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function ReverseText() {
  const [text, setText] = useState('');

  return (
    <div className="reverse-text">
      <h2>Kritilgan matni aylantrsh</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Matn kiriting"
      />
      <p>Teskari: {text.split('').reverse().join('')}</p>
    </div>
  );
}

function ShowPassword() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div className="show-password">
      <h2>parolni korsatish</h2>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Parolni kiriting"
      />
      <button onClick={togglePasswordVisibility}>
        {isPasswordVisible ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
  );
}

function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker" style={{ backgroundColor: color }}>
      <h2>Rang tanlash</h2>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

function PersonalInfoForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      dob: e.target.dob.value,
      gender: e.target.gender.value,
    };
    console.log(data);
  }

  return (
    <div className="personal-info-form">
      <h2>Shaxsiy malumotlarni kiritish</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstname" placeholder="Ism" />
        <input name="lastname" placeholder="Familiya" />
        <select name="gender">
          <option value="">Jins</option>
          <option value="male">Erkak</option>
          <option value="female">Ayol</option>
        </select>
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
}

function DynamicInputs() {
  const [inputs, setInputs] = useState(['']);

  function addInput() {
    setInputs([...inputs, '']);
  }

  function handleInputChange(e, index) {
    const newInputs = [...inputs];
    newInputs[index] = e.target.value;
    setInputs(newInputs);
  }

  function handleSubmit() {
    console.log(inputs);
  }

  return (
    <div className="dynamic-inputs">
      <h2>Dinamik input qoshish</h2>
      {inputs.map((value, index) => (
        <input
          key={index}
          value={value}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
      <button onClick={addInput}>Input qoshish</button>
      <button onClick={handleSubmit}>Yuborish</button>
    </div>
  );
}

function VotingSystem() {
  const [votes, setVotes] = useState({ JavaScript: 0, Python: 0, Java: 0 });

  function vote(language) {
    const newVotes = { ...votes };
    newVotes[language]++;
    setVotes(newVotes);
  }

  return (
    <div className="voting-system">
      <h2>Ovoz berish tizimi</h2>
      {Object.keys(votes).map((language) => (
        <div key={language}>
          <button onClick={() => vote(language)}>{language}</button>
          <span> Ovozlar: {votes[language]}</span>
        </div>
      ))}
    </div>
  );
}

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function calculateSum() {
    return Number(num1) + Number(num2);
  }

  function calculateProduct() {
    return Number(num1) * Number(num2);
  }

  return (
    <div className="calculator">
      <h2>Hisoblash kalkulyatori</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="1-son"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="2-son"
      />
      <p>Yigindi: {calculateSum()}</p>
      <p>Kopaytma: {calculateProduct()}</p>
    </div>
  );
}

function FormValidation() {
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Barcha maydonlarini toldring');
      return;
    }

    setError('');
    console.log(formData);
  }

  return (
    <div className="form-validation">
      <h2>Toldirilmagan maydonlarni tekshirish</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Ism" />
        <input name="email" placeholder="Email" />
        <input name="phone" placeholder="Telefon raqami" />
        <button type="submit">Yuborish</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

function TermsAgreement() {
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!agreed) {
      alert("Shartlarga rozilik bildirilishi shart!");
      return;
    }

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    console.log(data);
  }

  return (
    <div className="terms-agreement">
      <h2>Shartlarga rozi bolish</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Ism" />
        <input name="email" placeholder="Email" />
        <label>
          <input
            type="checkbox"
            onChange={() => setAgreed(!agreed)}
          />
          Shartlarga roziman
        </label>
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
}

export default App;