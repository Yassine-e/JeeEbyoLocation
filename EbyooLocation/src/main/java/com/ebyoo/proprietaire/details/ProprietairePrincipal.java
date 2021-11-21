package com.ebyoo.proprietaire.details;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ebyoo.beans.Proprietaire;

public class ProprietairePrincipal implements UserDetails {
	
	private Proprietaire proprietaire;
	
	public ProprietairePrincipal(Proprietaire proprietaire) {
		this.proprietaire = proprietaire;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authorities = new ArrayList<>();
		GrantedAuthority authority = new SimpleGrantedAuthority(proprietaire.getRoles());
		System.out.println("---------------------------------- "+authority);
		authorities.add(authority);
		/*this.proprietaire.getRoleList().forEach( r -> {
			GrantedAuthority authority = new SimpleGrantedAuthority(r);
			System.out.println("---------------------------------- "+authority);
			authorities.add(authority);
		});*/
		
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		if(this.proprietaire == null) {
			return "0";
		}
		return this.proprietaire.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.proprietaire.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
