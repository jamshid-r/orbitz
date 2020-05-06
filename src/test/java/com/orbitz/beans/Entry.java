package com.orbitz.beans;

public class Entry {
	
	private String destination;
	private String checkIn;
	private String checkOut;
	private String errorMessage;
	
	public Entry(String destination, String checkIn, String checkOut, String errorMessage) {
		this.destination = destination;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.errorMessage = errorMessage;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}

	public String getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	
}
