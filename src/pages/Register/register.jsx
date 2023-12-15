import { useEffect, useState } from "react";
import styles from "./register.module.scss"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { registerUser } from "../../store/actions/userActions";
import img from "../../assets/register/register_background.png"

export const Register = () => {
    const [eye, setEye] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.users);

    const onSubmit = (values) => {
        dispatch(registerUser(values));
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, [userInfo])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.bg_register}>
                    <div className={styles.form_styles_row}>
                        <div className={styles.form_style}>
                            <input type='username' placeholder='username' {...register('username')} />
                            <input type='email' placeholder='email' {...register('email')} />
                            <div className={styles.flex_row}>
                                <button>Далее</button>
                                <input type={eye ? 'text' : 'Пароль'}
                                    placeholder='password'{...register('password')}

                                />
                                <input type={eye ? 'text' : 'Повторите пароль'}
                                    placeholder='password'{...register('confirm_password')}

                                />
                                {
                                    eye ?
                                        (<AiOutlineEye className={styles.icon} onClick={() => setEye(!eye)} />) :
                                        (<AiOutlineEyeInvisible className={styles.icon} onClick={() => setEye(!eye)} />)
                                }
                            </div>

                            <button type='submite'>Регистрация</button>
                        </div>
                        <div className={styles.form_img}>
                            <img className={styles.img} src={img} alt='img' />
                        </div>
                    </div>
                </div>



            </form>
        </>
    )
}