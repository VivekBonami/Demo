/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import IconInputField from '../../Component/FormComponent/IconInputField';
import LogoWhite from '../../Component/FormComponent/LogoWhite';
import Button from '../../Component/FormComponent/Button';
import Icon from '../../Component/FormComponent/Icon';
import {loginValidation} from '../../Component/Validation/loginValidation';
import Footer from '../../Component/Footer';
import logo from '../../Assets/img/logo.png';
import {authActions} from '../../Stores/Actions/authActions';

function Login(props) {
	const dispatch = useDispatch();
	const serverErrors = useSelector(state => state.authReducer.errors);
	const initVal = {
		email: '',
		password: '',
	};
	const handleSubmit = value => {
		const payload = {
			email: value.email.trim(),
			password: value.password.trim(),
			tenant_id: process.env.REACT_APP_TENANT_ID,
		};
		dispatch(authActions.loginRequest(payload));
	};

	const handleCustomChange = (field, value, formikProps) => {
		if (serverErrors && Object.keys(serverErrors).length) {
			dispatch(authActions.resetServeError());
		}

		formikProps.setFieldValue(field, value);
	};

	const renderForm = formikProps => {
		const {values, errors, touched, handleChange, handleBlur, handleSubmit}
      = formikProps;
		return (
			<div className="pageBg loginPageWrap">
				<form onSubmit={handleSubmit}>
					<div className="pageWrap pageCenterCnt pageLoginWrap min-height-100vh">
						<Link to={'/'} className="logo">
							<LogoWhite src={logo} />
						</Link>
						<div className="boxBg">
							<div className="input-text-wrapper">
								<IconInputField
									// Label="Email"
									type="text"
									name="email"
									placeholder="Email"
									onChange={e => handleCustomChange('email', e.target.value, formikProps)}
									value={values.email}
									onBlur={handleBlur}
									iconName="fa fa-envelope"
									className="iconWrap"
									errors={errors.email}
									serverErrors={serverErrors}
									touched={touched.email}
									required
								/>
							</div>
							<div className="input-text-wrapper">
								<IconInputField
									// Label="Password"
									type="password"
									name="password"
									placeholder="Password"
									onChange={handleChange}
									value={values.password}
									iconName="fa fa-lock"
									className="iconWrap"
									onBlur={handleBlur}
									errors={errors.password}
									ServerErrors={serverErrors}
									touched={touched.password}
									required
								/>
							</div>
						</div>
						<div className="dflex">
							<Link className="linkStyle" to={'/forgot-password'}>
                Forgot Password?
							</Link>
							<Button text="Login" type="submit" className="btn" />
						</div>
						<div className="boxBtmLink">
							<Link className="linkStyle" to={'/landing'}>
								<Icon className="iconWrap" iconName="fa fa-user-circle" />{' '}
                Create Account
							</Link>
							<Link className="linkStyle" to={'/create-account'}>
								<Icon className="iconWrap" iconName="fa fa-question-circle-o" />
                Need Help
							</Link>
						</div>
						<Footer />
					</div>
				</form>
			</div>
		);
	};

	return (
		<Formik
			initialValues={initVal}
			onSubmit={handleSubmit}
			validationSchema={loginValidation()}
		>
			{renderForm}
		</Formik>
	);
}

export default Login;
