package com.example.backend.projectdemofpt.fptappsbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

@Entity
@Table(name = "Artists")
public class Employee {


    // Database original
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ArtistID;

    @NotNull
    private String ArtistName;

    @NotNull
    private String AlbumName;

    private String ImageURL;

    @NotNull
    private Date ReleaseDate;

    @NotNull
    private Float Price;

    private String SampleURL;

    // Getters and setters

    public Long getArtistID() {
        return ArtistID;
    }

    public String getArtistName() {
        return ArtistName;
    }

    public String getAlbumName() {
        return AlbumName;
    }

    public String getImageURL() {
        return ImageURL;
    }

    public Date getReleaseDate() {
        return ReleaseDate;
    }

    public Float getPrice() {
        return Price;
    }

    public String getSampleURL() {
        return SampleURL;
    }

    public void setArtistID(Long artistID) {
        ArtistID = artistID;
    }

    public void setArtistName(String artistName) {
        ArtistName = artistName;
    }

    public void setAlbumName(String albumName) {
        AlbumName = albumName;
    }

    public void setImageURL(String imageURL) {
        ImageURL = imageURL;
    }

    public void setReleaseDate(Date releaseDate) {
        ReleaseDate = releaseDate;
    }

    public void setPrice(Float price) {
        Price = price;
    }

    public void setSampleURL(String sampleURL) {
        SampleURL = sampleURL;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "ArtistID=" + ArtistID +
                ", ArtistName='" + ArtistName + '\'' +
                ", AlbumName='" + AlbumName + '\'' +
                ", ImageURL='" + ImageURL + '\'' +
                ", ReleaseDate=" + ReleaseDate +
                ", Price=" + Price +
                ", SampleURL='" + SampleURL + '\'' +
                '}';
    }

    public Employee() {

    }

    public Employee(Long artistID, String artistName, String albumName, String imageURL, Date releaseDate, Float price, String sampleURL) {
        ArtistID = artistID;
        ArtistName = artistName;
        AlbumName = albumName;
        ImageURL = imageURL;
        ReleaseDate = releaseDate;
        Price = price;
        SampleURL = sampleURL;
    }

}
