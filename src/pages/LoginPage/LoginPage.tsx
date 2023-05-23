import { Button, Card, Form, Input, Space } from 'antd';
import React from 'react';
import './LoginPage.scss';
import logoBanner from '@assets/images/beseye_logo_banner.jpeg';

const LoginPage = () => {
	const [form] = Form.useForm();

	return (
		<div className="card-wrapper">
			<Card
				extra={
					<img
						className="login-card__logo"
						src={logoBanner}
						alt="Beseye Logo Banner"
					/>
				}
				className="login-card"
			>
				<Form
					form={form}
					name="validateOnly"
					layout="vertical"
					autoComplete="off"
					className="login-card__form"
				>
					<Form.Item name="email" label="Your E-mail:">
						<Input />
					</Form.Item>
					<Form.Item name="pwd" label="Your Pwd:">
						<Input />
					</Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						style={{ display: 'block', marginLeft: 'auto', marginRight: 0 }}
					>
						Submit
					</Button>
				</Form>
			</Card>
		</div>
	);
};

export default LoginPage;
