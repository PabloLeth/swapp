<input type="submit" value="Submit" disabled={disable} className="prueba"
          onClick={(e) => AuthService.putUser(e, id, companyNameChange, activityChange, regionChange, postalcodeChange, adressChange, token)
            .then(((response) => {
              setDisable(!disable);
              
          })).catch(err => {
            console.log("Error at updating User, reason: ", err.info)
          })}></input>