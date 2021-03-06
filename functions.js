
readTodos();
async function readTodos() {

    try {
        const result = await fetch("http://localhost:8080/parkovi", { method: "GET" })
        const parkovi = await result.json();
        parkovi.forEach(t => {
            var table = document.getElementById("myTable");
            var row = table.insertRow(1);

            var naziv = row.insertCell(0);
            naziv.innerHTML = t.naziv;

            var vrsta = row.insertCell(1);
            vrsta.innerHTML = t.vrsta;

            var velicina = row.insertCell(2);
            velicina.innerHTML = t.velicina;

            var osnovan = row.insertCell(3);
            osnovan.innerHTML = t.osnovan;

            var rijeka = row.insertCell(4);
            rijeka.innerHTML = t.rijeka;

            var regija = row.insertCell(5);
            regija.innerHTML = t.regija;

            var stranica = row.insertCell(6);
            stranica.innerHTML = t.stranica;

            var vrh = row.insertCell(7);
            vrh.innerHTML = t.najvisi_vrh;

            var jezero = row.insertCell(8);
            jezero.innerHTML = t.nazivJezera;

            var veljezero = row.insertCell(9);
            veljezero.innerHTML = t.velicinaJezera;

            var dubina = row.insertCell(10);
            dubina.innerHTML = t.dubina;
        })
    }
    catch (e) {
        console.log("Error reading the parkovi.")
    }
}

function pretrazivanje() {
    var input, filter, table, tr, td, i, txtValue;
    var e = document.getElementById("kriterij");
    var pretragaPo = e.value;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

        td0 = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3];
        td4 = tr[i].getElementsByTagName("td")[4];
        td5 = tr[i].getElementsByTagName("td")[5];
        td6 = tr[i].getElementsByTagName("td")[6];
        td7 = tr[i].getElementsByTagName("td")[7];
        td8 = tr[i].getElementsByTagName("td")[8];
        td9 = tr[i].getElementsByTagName("td")[9];
        td10 = tr[i].getElementsByTagName("td")[10];
        if (td0 || td1 || td2 || td3 || td4 || td5 || td6 || td7 || td8 || td9 || td10) {
            txtValue0 = td0.textContent || td0.innerText;
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            txtValue3 = td3.textContent || td3.innerText;
            txtValue4 = td4.textContent || td4.innerText;
            txtValue5 = td5.textContent || td5.innerText;
            txtValue6 = td6.textContent || td6.innerText;
            txtValue7 = td7.textContent || td7.innerText;
            txtValue8 = td8.textContent || td8.innerText;
            txtValue9 = td9.textContent || td9.innerText;
            txtValue10 = td10.textContent || td10.innerText;
            if (txtValue0.toUpperCase().indexOf(filter) > -1 ||
                txtValue1.toUpperCase().indexOf(filter) > -1 ||
                txtValue2.toUpperCase().indexOf(filter) > -1 ||
                txtValue3.toUpperCase().indexOf(filter) > -1 ||
                txtValue4.toUpperCase().indexOf(filter) > -1 ||
                txtValue5.toUpperCase().indexOf(filter) > -1 ||
                txtValue6.toUpperCase().indexOf(filter) > -1 ||
                txtValue7.toUpperCase().indexOf(filter) > -1 ||
                txtValue8.toUpperCase().indexOf(filter) > -1 ||
                txtValue9.toUpperCase().indexOf(filter) > -1 ||
                txtValue10.toUpperCase().indexOf(filter) > -1 && pretragaPo == sve) {
                tr[i].style.display = "";
            }
            else if (txtValue0.toUpperCase().indexOf(filter) > -1 && pretragaPo == naziv) {
                tr[i].style.display = "";
            }
            else if (txtValue1.toUpperCase().indexOf(filter) > -1 && pretragaPo == vrsta) {
                tr[i].style.display = "";
            }
            else if (txtValue2.toUpperCase().indexOf(filter) > -1 && pretragaPo == velicina) {
                tr[i].style.display = "";
            }
            else if (txtValue3.toUpperCase().indexOf(filter) > -1 && pretragaPo == osnovan) {
                tr[i].style.display = "";
            }
            else if (txtValue4.toUpperCase().indexOf(filter) > -1 && pretragaPo == rijeka) {
                tr[i].style.display = "";
            }
            else if (txtValue5.toUpperCase().indexOf(filter) > -1 && pretragaPo == regija) {
                tr[i].style.display = "";
            }
            else if (txtValue6.toUpperCase().indexOf(filter) > -1 && pretragaPo == stranica) {
                tr[i].style.display = "";
            }
            else if (txtValue7.toUpperCase().indexOf(filter) > -1 && pretragaPo == najvisi_vrh) {
                tr[i].style.display = "";
            }
            else if (txtValue8.toUpperCase().indexOf(filter) > -1 && pretragaPo == nazjezero) {
                tr[i].style.display = "";
            }
            else if (txtValue9.toUpperCase().indexOf(filter) > -1 && pretragaPo == veljezero) {
                tr[i].style.display = "";
            }
            else if (txtValue10.toUpperCase().indexOf(filter) > -1 && pretragaPo == dubina) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }

    }
}

function htmlToCSV(html, filename) {
    var data = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }

        data.push(row.join(","));
    }

    downloadCSVFile(data.join("\n"), filename);
}

function downloadCSVFile(csv, filename) {
    var csv_file, download_link;

    csv_file = new Blob([csv], { type: "text/csv" });

    download_link = document.createElement("a");

    download_link.download = filename;

    download_link.href = window.URL.createObjectURL(csv_file);

    download_link.style.display = "none";

    document.body.appendChild(download_link);

    download_link.click();
}

document.getElementById("download-csv").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
    htmlToCSV(html, "tablica.csv");
});