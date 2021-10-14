package com.wstutorial.rest;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Giraffe {
    private String name;

    public Giraffe() {
    }

    public Giraffe(String name) {
        this.name = name;
    }
}