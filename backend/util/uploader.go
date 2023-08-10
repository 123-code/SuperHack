package util

import (
  "io/ioutil"
  "path/filepath"
  "backend/data"
)  

func UploadPicture(p data.PostPicture) error {

	idString := p.ID.String()

	ext := filepath.Ext(p.Photo)

	buffer, err := ioutil.ReadFile(p.Photo)
	if err != nil {
	  return err 
	}

	p.PhotoBlob = buffer

	photoPath := "photos/" + idString + ext

	err = ioutil.WriteFile(photoPath, p.PhotoBlob, 0644)
  if err != nil {
    return err
  }

  p.Photo = idString + ext
  
  return nil
}