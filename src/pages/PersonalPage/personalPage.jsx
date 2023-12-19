import styles from "."
import styles from "./personalPage.module.scss"
// import { BsPersonBoundingBox } from "react-icons/bs"
// import { BiMessageRoundedDots } from "react-icons/bi"
import { addStudens } from "../../store/actions/";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { useState } from "react";



export const PersonalPage = () => {
    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();

    const { userInfo } = useSelector(state => state.user);
    const { register, handleSubmit } = useForm({
        defaultValues: userInfo
    });
    const onSubmit = (values) => {
        dispatch(addStudens(values))
        console.log(values);
    }
    const handlechangePhoto = (e) => {
        const fileList = e.target.files;
        const urlPhoto = URL.createObjectURL(fileList[0]);
        setPhoto(urlPhoto);
    }
    return(
        <>
           <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
                <div className={styles.content_page}>
                    <div className={styles.page_file}>
                        <input type="file"  {...register('photo')} onChange={handlechangePhoto} />
                        <input className={styles.input} type="text" placeholder="введите свое имя.." {...register('name')} />
                        <input className={styles.input} type="text" placeholder="введите фамилию.." {...register('last_name')} />
                        <div className={styles.user_img}>
                            <img src={photo} className={styles.img}/>
                        </div>
                        <input className={styles.input} type="email" placeholder="Введите email.." {...register('email')} />
                        <input className={styles.input} type="number" placeholder="+(996)..." {...register('email')} />
                        </div>
                        <div className={styles.personal_page2}>
    <div className={styles.page_button}>
                    <button>сохранить</button>
                    <button>изменить</button>
                </div>
                        </div>
                       

                    </div>
                </div>
            </form>
        </>
    )
}


