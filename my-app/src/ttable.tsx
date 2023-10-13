

const Lucca = () => {
    return (<table>
    <tbody>
      <tr>
        <td><p>Seleziona metodo:</p></td>
        <td colSpan={3}>
          <select name="seleziona_tipo" id="seleziona_tipo" >
          <option value="F" selected>Tipo francese (rata costante)</option>
          <option value="I">Tipo italiano (rata variabile - quota capitale costante)</option>
          </select>
        </td>
      </tr>
      <tr >
        <td><p>Importo da rateizzare in Euro</p></td>
        <td colSpan={3}><p><input  size={10} name="importo" id="importo" value="60000" required/> 
          <em>numerico con punto come separatore decimale • es 12340.56</em></p></td>
      </tr>
      <tr>
        <td><p>Tasso Annuale:</p></td>
        <td colSpan={3}>
          <input size={5} name="tasso_annuale" id="tasso_annuale"  type="text"  required value="4"/>
          <span >%</span>
        </td>
      </tr>
      <tr >
        <td>
          <p>
          <input type="radio" name="r_a" id="r_a_1" value="1" checked />
          <label >Durata in Anni</label>
          (max 60)</p>
        </td>
        <td>
          <div id="d_anni_durata">
            <input name="anni_durata" type="text"  id="anni_durata" value="20" size={5} />
          </div>
        </td>
        <td>
          oppure
          <input type="radio" />
          <label >Numero rate</label>
        </td>
        <td>
          <div id="d_rate_ann" >
          <input  type="text"  value=""/>
          </div>
        </td>
      </tr>
      <tr>
        <td><p>Frequenza</p></td>
        <td colSpan={3}>
          <select name="frequenza" id="frequenza"  required>
          <option value="">Seleziona</option>
          <option value="12">Mensile</option>
          <option value="6" selected>Bimestrale</option>
          <option value="4">Trimestrale</option>
          <option value="3">Quadrimestrale</option>
          <option value="2">Semestrale</option>
          <option value="1">Annuale</option>
          </select>
        </td>
      </tr>
      {/* <tr class="table_row_color">
        <td><p>Data scadenza prima rata:</p></td>
        <td colspan="3">
          <div>
            <span class="Zebra_DatePicker_Icon_Wrapper" style="display: inline-block; position: relative; float: none; inset: auto;"><input name="data_scadenza" id="data_scadenza" type="text" class="marg_box" placeholder="__/__/____" required="" value="19/10/2023" style="width: 110px; position: relative; inset: auto;" onblur="chek_data('data_scadenza');" readonly="readonly"><button type="button" class="Zebra_DatePicker_Icon Zebra_DatePicker_Icon_Inside" style="top: 3.5px; left: 91px;">Pick a date</button></span>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <p>
          <input type="checkbox" name="ck_fine_dis" id="ck_fine_dis" value="ck_fine_dis" disabled="" checked="">
          se la scadenza è fine mese (es 31) per gli altri mesi prende l'ultimo giorno utile (es giorno 30  se non c'è il 31)
          </p>
        </td>
      </tr>
      <tr class="table_row_color">
        <td>

          <input type="hidden" name="amm_des_form" id="amm_des_form" value="1697031369">
          <input type="hidden" name="amm_des_val" id="amm_des_val" value="074367e261fe360ae1effd084a30aee5">
          <input type="submit" class="tasto" name="Calcola" value="Elabora" title="Effettua il calcolo" onclick="return genera_piano();">
          <input name="MM_post_calcolo_rate" type="hidden" id="MM_post_calcolo_rate" value="1">
          <input name="ck_fine" type="hidden" id="ck_fine" value="1">
          <input name="bt_dwn_f24" type="hidden" id="bt_dwn_f24" value="">
        </td>
        <td colspan="3">
          <input type="hidden" name="print_piano" id="print_piano" value="1">
          <input type="submit" class="tasto" name="Calcola2" value="Genera prospetto PDF" title="Genera prospetto PDF" onclick="return genera_pdf();">
        </td>
      </tr> */}
    </tbody>
  </table>);
}
export default Lucca;