import { useState } from "react";
import styles from "../Form/Form.module.css";
import validation from "./Validation";
import Logotipo from "../../images/log2.png";
import Logotipo2 from "../../images/logs.png";

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <div className={styles.from}>
            <div>
        <img className={styles.logo2} src={Logotipo2} alt="" />
      </div>
      <div>
        <img className={styles.logo1} src={Logotipo} alt="" />
      </div>

      
      <div>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div >
            <label htmlFor=""></label> {errors.e1 && <p className={styles.alert}>{errors.e1}</p>}
            {errors.e2 && <p className={styles.alert}>{errors.e2}</p>}
            {errors.e3 && <p className={styles.alert}>{errors.e3}</p>}
            <input className={styles.input2}
              type="text"
              placeholder="Email..."
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
           
          </div>
          <div >
            {/* Password input */}
            <label htmlFor=""></label>
            <input className={styles.input2}
              onChange={handleChange}
              name="password"
              value={userData.password}
              type="password"
              placeholder="Password..."
            />
             {errors.p1 && <p className={styles.alert}>{errors.p1}</p>}
            {errors.p2 && <p className={styles.alert}>{errors.p2}</p>}
          </div>
          <div>
            <button>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
