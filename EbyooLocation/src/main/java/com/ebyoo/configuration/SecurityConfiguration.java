package com.ebyoo.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ebyoo.services.ProprietaireService;

@Configuration
@CrossOrigin
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public ProprietaireService proprietaireService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		/*auth
			.inMemoryAuthentication()
			.withUser("admin").password(passwordEncoder().encode("12345")).roles("ADMIN")
			.and()
			.withUser("ousmar").password(passwordEncoder().encode("12345")).roles("PROPRIETAIRE");*/
		auth.authenticationProvider(authenticationProvider());
		
	}
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable()
			.authorizeRequests()
				.anyRequest().permitAll()
				//.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//				.antMatchers("/client/pa/**").permitAll()
//				.antMatchers("/annonce/pa/**").permitAll()
//				.antMatchers("/proprietaire/pa/**").permitAll()
//				.antMatchers("/photo/pa/**").permitAll()
//				//.antMatchers("//**").authenticated()
//				.antMatchers("/client/ap/**").hasAnyAuthority("ADMIN","PROPRIETAIRE")
//				.antMatchers("/annonce/ap/**").hasAnyAuthority("ADMIN","PROPRIETAIRE")
//				.antMatchers("/proprietaire/ap/**").hasAnyAuthority("ADMIN","PROPRIETAIRE")
//				.antMatchers("/photo/ap/**").hasAnyAuthority("ADMIN","PROPRIETAIRE")
//				.antMatchers("/client/a/**").hasAuthority("ADMIN")
//				.antMatchers("/annonce/a/**").hasAuthority("ADMIN")
//				.antMatchers("/proprietaire/a/**").hasAuthority("ADMIN")
//				.antMatchers("/photo/a/**").hasAuthority("ADMIN")
			.and()
				.httpBasic();
//				.formLogin() // the link in the post method must be /login + fields names = username / password
//				.loginProcessingUrl("/login")
//				.usernameParameter("mail")
//				.passwordParameter("password")
//				.and()
//					.logout().logoutRequestMatcher(new AntPathRequestMatcher("/pa/logout")) // the link in the post method must be /logout // .logoutSuccessUrl("/login") -> redirect user to the login page
//				.and()
//					.rememberMe()
//					.rememberMeParameter("remember-me"); //the name of the remember me field must be remember-me
				//.loginPage(null)
				
	}
	
	
	@Bean
	DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider dap = new DaoAuthenticationProvider();
		dap.setPasswordEncoder(passwordEncoder());
		dap.setUserDetailsService(proprietaireService);
		return dap;
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
}
