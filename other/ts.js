var mg = document.createElement("iframe")
mg.setAttribute("id", "mgid")
mg.setAttribute("src", "data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICA8c3R5bGU+CiAgICBib2R5ICAgICAgeyBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO2JhY2tncm91bmQ6YmxhY2s7IH0KICAgICN0ZXRyaXMgICB7IG1hcmdpbjogMWVtIGF1dG87IHBhZGRpbmc6IDFlbTsgYm9yZGVyOiA0cHggc29saWQgZ3JleTsgYm9yZGVyLXJhZGl1czogMTBweDsgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODsgfQogICAgI3N0YXRzICAgIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9CiAgICAjY2FudmFzICAgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiB0b3A7IGJhY2tncm91bmQ6IGJsYWNrOyBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAjOTk5OyBib3JkZXI6IDJweCBzb2xpZCAjMzMzOyB9CiAgICAjbWVudSAgICAgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfQogICAgI21lbnUgcCAgIHsgbWFyZ2luOiAwLjVlbSAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH0KICAgICNtZW51IHAgYSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6IGJsYWNrOyB9CiAgICAjdXBjb21pbmcgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwIGF1dG87IGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7IH0KICAgICNzY29yZSAgICB7IGNvbG9yOiBibGFjazsgZm9udC13ZWlnaHQ6IGJvbGQ7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH0KICAgICNyb3dzICAgICB7IGNvbG9yOiBibGFjazsgZm9udC13ZWlnaHQ6IGJvbGQ7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH0KICAgICNzdGF0cyAgICB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwZW07IHJpZ2h0OiAxZW07IH0KICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICAgMHB4KSBhbmQgKG1pbi1oZWlnaHQ6ICAgMHB4KSAgeyAjdGV0cmlzIHsgZm9udC1zaXplOiAwLjc1ZW07IHdpZHRoOiAyNTBweDsgfSAjbWVudSB7IHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAyMDBweDsgfSAjdXBjb21pbmcgeyB3aWR0aDogIDUwcHg7IGhlaWdodDogIDUwcHg7IH0gI2NhbnZhcyB7IHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAyMDBweDsgfSB9IC8qIDEwcHggY2h1bmtzICovCiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtaW4taGVpZ2h0OiA0MDBweCkgIHsgI3RldHJpcyB7IGZvbnQtc2l6ZTogMS4wMGVtOyB3aWR0aDogMzUwcHg7IH0gI21lbnUgeyB3aWR0aDogMTUwcHg7IGhlaWdodDogMzAwcHg7IH0gI3VwY29taW5nIHsgd2lkdGg6ICA3NXB4OyBoZWlnaHQ6ICA3NXB4OyB9ICNjYW52YXMgeyB3aWR0aDogMTUwcHg7IGhlaWdodDogMzAwcHg7IH0gfSAvKiAxNXB4IGNodW5rcyAqLwogICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWluLWhlaWdodDogNTAwcHgpICB7ICN0ZXRyaXMgeyBmb250LXNpemU6IDEuMjVlbTsgd2lkdGg6IDQ1MHB4OyB9ICNtZW51IHsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDQwMHB4OyB9ICN1cGNvbWluZyB7IHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDsgfSAjY2FudmFzIHsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDQwMHB4OyB9IH0gLyogMjBweCBjaHVua3MgKi8KICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSAgeyAjdGV0cmlzIHsgZm9udC1zaXplOiAxLjUwZW07IHdpZHRoOiA1NTBweDsgfSAjbWVudSB7IHdpZHRoOiAyNTBweDsgaGVpZ2h0OiA1MDBweDsgfSAjdXBjb21pbmcgeyB3aWR0aDogMTI1cHg7IGhlaWdodDogMTI1cHg7IH0gI2NhbnZhcyB7IHdpZHRoOiAyNTBweDsgaGVpZ2h0OiA1MDBweDsgfSB9IC8qIDI1cHggY2h1bmtzICovCiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtaW4taGVpZ2h0OiA3MDBweCkgIHsgI3RldHJpcyB7IGZvbnQtc2l6ZTogMS43NWVtOyB3aWR0aDogNjUwcHg7IH0gI21lbnUgeyB3aWR0aDogMzAwcHg7IGhlaWdodDogNjAwcHg7IH0gI3VwY29taW5nIHsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4OyB9ICNjYW52YXMgeyB3aWR0aDogMzAwcHg7IGhlaWdodDogNjAwcHg7IH0gfSAvKiAzMHB4IGNodW5rcyAqLwogICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWluLWhlaWdodDogODAwcHgpICB7ICN0ZXRyaXMgeyBmb250LXNpemU6IDIuMDBlbTsgd2lkdGg6IDc1MHB4OyB9ICNtZW51IHsgd2lkdGg6IDM1MHB4OyBoZWlnaHQ6IDcwMHB4OyB9ICN1cGNvbWluZyB7IHdpZHRoOiAxNzVweDsgaGVpZ2h0OiAxNzVweDsgfSAjY2FudmFzIHsgd2lkdGg6IDM1MHB4OyBoZWlnaHQ6IDcwMHB4OyB9IH0gLyogMzVweCBjaHVua3MgKi8KICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDkwMHB4KSAgeyAjdGV0cmlzIHsgZm9udC1zaXplOiAyLjI1ZW07IHdpZHRoOiA4NTBweDsgfSAjbWVudSB7IHdpZHRoOiA0MDBweDsgaGVpZ2h0OiA4MDBweDsgfSAjdXBjb21pbmcgeyB3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7IH0gI2NhbnZhcyB7IHdpZHRoOiA0MDBweDsgaGVpZ2h0OiA4MDBweDsgfSB9IC8qIDQwcHggY2h1bmtzICovCiAgPC9zdHlsZT4KPC9oZWFkPgoKPGJvZHk+CgogIDxkaXYgaWQ9InRldHJpcyI+CiAgICA8ZGl2IGlkPSJtZW51Ij4KICAgICAgPHAgaWQ9InN0YXJ0Ij48YSBocmVmPSJqYXZhc2NyaXB0OnBsYXkoKTsiPlByZXNzIFNwYWNlIHRvIFBsYXk8L2E+PC9wPgogICAgICA8cD48Y2FudmFzIGlkPSJ1cGNvbWluZyI+PC9jYW52YXM+PC9wPgogICAgICA8cD5TY29yZTogPHNwYW4gaWQ9InNjb3JlIj4wMDAwMDwvc3Bhbj48L3A+CiAgICAgIDxwPlJvd3M6IDxzcGFuIGlkPSJyb3dzIj4wPC9zcGFuPjwvcD4KICAgIDwvZGl2PgogICAgPGNhbnZhcyBpZD0iY2FudmFzIj4KICAgICAgU29ycnksIHRoaXMgZXhhbXBsZSBjYW5ub3QgYmUgcnVuIGJlY2F1c2UgeW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlICZsdDtjYW52YXMmZ3Q7IGVsZW1lbnQKICAgIDwvY2FudmFzPgogIDwvZGl2PgoKCiAgPHNjcmlwdD4KICAgIHZhciBTdGF0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIHMoYSxnLGQpe3ZhciBmLGMsZTtmb3IoYz0wO2M8MzA7YysrKWZvcihmPTA7Zjw3MztmKyspZT0oZitjKjc0KSo0LGFbZV09YVtlKzRdLGFbZSsxXT1hW2UrNV0sYVtlKzJdPWFbZSs2XTtmb3IoYz0wO2M8MzA7YysrKWU9KDczK2MqNzQpKjQsYzxnPyhhW2VdPWJbZF0uYmcucixhW2UrMV09YltkXS5iZy5nLGFbZSsyXT1iW2RdLmJnLmIpOihhW2VdPWJbZF0uZmcucixhW2UrMV09YltkXS5mZy5nLGFbZSsyXT1iW2RdLmZnLmIpfXZhciByPTAsdD0yLGcsdT0wLGo9KG5ldyBEYXRlKS5nZXRUaW1lKCksRj1qLHY9aixsPTAsdz0xRTMseD0wLGssZCxhLG0seSxuPTAsej0xRTMsQT0wLGYsYyxvLEIscD0wLEM9MUUzLEQ9MCxoLGkscSxFLGI9e2Zwczp7Ymc6e3I6MTYsZzoxNixiOjQ4fSxmZzp7cjowLGc6MjU1LGI6MjU1fX0sbXM6e2JnOntyOjE2LGc6NDgsYjoxNn0sZmc6e3I6MCxnOjI1NSxiOjB9fSxtYjp7Ymc6e3I6NDgsZzoxNiwKYjoyNn0sZmc6e3I6MjU1LGc6MCxiOjEyOH19fTtnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO2cuc3R5bGUuY3Vyc29yPSJwb2ludGVyIjtnLnN0eWxlLndpZHRoPSI4MHB4IjtnLnN0eWxlLm9wYWNpdHk9IjAuOSI7Zy5zdHlsZS56SW5kZXg9IjEwMDAxIjtnLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIixmdW5jdGlvbigpe3IrKztyPT10JiYocj0wKTtrLnN0eWxlLmRpc3BsYXk9Im5vbmUiO2Yuc3R5bGUuZGlzcGxheT0ibm9uZSI7aC5zdHlsZS5kaXNwbGF5PSJub25lIjtzd2l0Y2gocil7Y2FzZSAwOmsuc3R5bGUuZGlzcGxheT0iYmxvY2siO2JyZWFrO2Nhc2UgMTpmLnN0eWxlLmRpc3BsYXk9ImJsb2NrIjticmVhaztjYXNlIDI6aC5zdHlsZS5kaXNwbGF5PSJibG9jayJ9fSwhMSk7az1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0icmdiKCIrTWF0aC5mbG9vcihiLmZwcy5iZy5yLzIpKyIsIitNYXRoLmZsb29yKGIuZnBzLmJnLmcvCjIpKyIsIitNYXRoLmZsb29yKGIuZnBzLmJnLmIvMikrIikiO2suc3R5bGUucGFkZGluZz0iMnB4IDBweCAzcHggMHB4IjtnLmFwcGVuZENoaWxkKGspO2Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7ZC5zdHlsZS5mb250RmFtaWx5PSJIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmIjtkLnN0eWxlLnRleHRBbGlnbj0ibGVmdCI7ZC5zdHlsZS5mb250U2l6ZT0iOXB4IjtkLnN0eWxlLmNvbG9yPSJyZ2IoIitiLmZwcy5mZy5yKyIsIitiLmZwcy5mZy5nKyIsIitiLmZwcy5mZy5iKyIpIjtkLnN0eWxlLm1hcmdpbj0iMHB4IDBweCAxcHggM3B4IjtkLmlubmVySFRNTD0nPHNwYW4gc3R5bGU9ImZvbnQtd2VpZ2h0OmJvbGQiPkZQUzwvc3Bhbj4nO2suYXBwZW5kQ2hpbGQoZCk7YT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJjYW52YXMiKTthLndpZHRoPTc0O2EuaGVpZ2h0PTMwO2Euc3R5bGUuZGlzcGxheT0iYmxvY2siO2Euc3R5bGUubWFyZ2luTGVmdD0iM3B4IjtrLmFwcGVuZENoaWxkKGEpOwptPWEuZ2V0Q29udGV4dCgiMmQiKTttLmZpbGxTdHlsZT0icmdiKCIrYi5mcHMuYmcucisiLCIrYi5mcHMuYmcuZysiLCIrYi5mcHMuYmcuYisiKSI7bS5maWxsUmVjdCgwLDAsYS53aWR0aCxhLmhlaWdodCk7eT1tLmdldEltYWdlRGF0YSgwLDAsYS53aWR0aCxhLmhlaWdodCk7Zj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtmLnN0eWxlLmJhY2tncm91bmRDb2xvcj0icmdiKCIrTWF0aC5mbG9vcihiLm1zLmJnLnIvMikrIiwiK01hdGguZmxvb3IoYi5tcy5iZy5nLzIpKyIsIitNYXRoLmZsb29yKGIubXMuYmcuYi8yKSsiKSI7Zi5zdHlsZS5wYWRkaW5nPSIycHggMHB4IDNweCAwcHgiO2Yuc3R5bGUuZGlzcGxheT0ibm9uZSI7Zy5hcHBlbmRDaGlsZChmKTtjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO2Muc3R5bGUuZm9udEZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiI7Yy5zdHlsZS50ZXh0QWxpZ249ImxlZnQiO2Muc3R5bGUuZm9udFNpemU9CiI5cHgiO2Muc3R5bGUuY29sb3I9InJnYigiK2IubXMuZmcucisiLCIrYi5tcy5mZy5nKyIsIitiLm1zLmZnLmIrIikiO2Muc3R5bGUubWFyZ2luPSIwcHggMHB4IDFweCAzcHgiO2MuaW5uZXJIVE1MPSc8c3BhbiBzdHlsZT0iZm9udC13ZWlnaHQ6Ym9sZCI+TVM8L3NwYW4+JztmLmFwcGVuZENoaWxkKGMpO2E9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiY2FudmFzIik7YS53aWR0aD03NDthLmhlaWdodD0zMDthLnN0eWxlLmRpc3BsYXk9ImJsb2NrIjthLnN0eWxlLm1hcmdpbkxlZnQ9IjNweCI7Zi5hcHBlbmRDaGlsZChhKTtvPWEuZ2V0Q29udGV4dCgiMmQiKTtvLmZpbGxTdHlsZT0icmdiKCIrYi5tcy5iZy5yKyIsIitiLm1zLmJnLmcrIiwiK2IubXMuYmcuYisiKSI7by5maWxsUmVjdCgwLDAsYS53aWR0aCxhLmhlaWdodCk7Qj1vLmdldEltYWdlRGF0YSgwLDAsYS53aWR0aCxhLmhlaWdodCk7dHJ5e3BlcmZvcm1hbmNlJiZwZXJmb3JtYW5jZS5tZW1vcnkmJnBlcmZvcm1hbmNlLm1lbW9yeS50b3RhbEpTSGVhcFNpemUmJgoodD0zKX1jYXRjaChHKXt9aD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTtoLnN0eWxlLmJhY2tncm91bmRDb2xvcj0icmdiKCIrTWF0aC5mbG9vcihiLm1iLmJnLnIvMikrIiwiK01hdGguZmxvb3IoYi5tYi5iZy5nLzIpKyIsIitNYXRoLmZsb29yKGIubWIuYmcuYi8yKSsiKSI7aC5zdHlsZS5wYWRkaW5nPSIycHggMHB4IDNweCAwcHgiO2guc3R5bGUuZGlzcGxheT0ibm9uZSI7Zy5hcHBlbmRDaGlsZChoKTtpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpO2kuc3R5bGUuZm9udEZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiI7aS5zdHlsZS50ZXh0QWxpZ249ImxlZnQiO2kuc3R5bGUuZm9udFNpemU9IjlweCI7aS5zdHlsZS5jb2xvcj0icmdiKCIrYi5tYi5mZy5yKyIsIitiLm1iLmZnLmcrIiwiK2IubWIuZmcuYisiKSI7aS5zdHlsZS5tYXJnaW49IjBweCAwcHggMXB4IDNweCI7aS5pbm5lckhUTUw9JzxzcGFuIHN0eWxlPSJmb250LXdlaWdodDpib2xkIj5NQjwvc3Bhbj4nOwpoLmFwcGVuZENoaWxkKGkpO2E9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiY2FudmFzIik7YS53aWR0aD03NDthLmhlaWdodD0zMDthLnN0eWxlLmRpc3BsYXk9ImJsb2NrIjthLnN0eWxlLm1hcmdpbkxlZnQ9IjNweCI7aC5hcHBlbmRDaGlsZChhKTtxPWEuZ2V0Q29udGV4dCgiMmQiKTtxLmZpbGxTdHlsZT0iIzMwMTAxMCI7cS5maWxsUmVjdCgwLDAsYS53aWR0aCxhLmhlaWdodCk7RT1xLmdldEltYWdlRGF0YSgwLDAsYS53aWR0aCxhLmhlaWdodCk7cmV0dXJue2RvbUVsZW1lbnQ6Zyx1cGRhdGU6ZnVuY3Rpb24oKXt1Kys7aj0obmV3IERhdGUpLmdldFRpbWUoKTtuPWotRjt6PU1hdGgubWluKHosbik7QT1NYXRoLm1heChBLG4pO3MoQi5kYXRhLE1hdGgubWluKDMwLDMwLW4vMjAwKjMwKSwibXMiKTtjLmlubmVySFRNTD0nPHNwYW4gc3R5bGU9ImZvbnQtd2VpZ2h0OmJvbGQiPicrbisiIE1TPC9zcGFuPiAoIit6KyItIitBKyIpIjtvLnB1dEltYWdlRGF0YShCLDAsMCk7Rj1qO2lmKGo+CnYrMUUzKXtsPU1hdGgucm91bmQodSoxRTMvKGotdikpO3c9TWF0aC5taW4odyxsKTt4PU1hdGgubWF4KHgsbCk7cyh5LmRhdGEsTWF0aC5taW4oMzAsMzAtbC8xMDAqMzApLCJmcHMiKTtkLmlubmVySFRNTD0nPHNwYW4gc3R5bGU9ImZvbnQtd2VpZ2h0OmJvbGQiPicrbCsiIEZQUzwvc3Bhbj4gKCIrdysiLSIreCsiKSI7bS5wdXRJbWFnZURhdGEoeSwwLDApO2lmKHQ9PTMpcD1wZXJmb3JtYW5jZS5tZW1vcnkudXNlZEpTSGVhcFNpemUqOS41NEUtNyxDPU1hdGgubWluKEMscCksRD1NYXRoLm1heChELHApLHMoRS5kYXRhLE1hdGgubWluKDMwLDMwLXAvMiksIm1iIiksaS5pbm5lckhUTUw9JzxzcGFuIHN0eWxlPSJmb250LXdlaWdodDpib2xkIj4nK01hdGgucm91bmQocCkrIiBNQjwvc3Bhbj4gKCIrTWF0aC5yb3VuZChDKSsiLSIrTWF0aC5yb3VuZChEKSsiKSIscS5wdXRJbWFnZURhdGEoRSwwLDApO3Y9ajt1PTB9fX19OwogIDwvc2NyaXB0PgogIDxzY3JpcHQ+CgogICAgZnVuY3Rpb24gZ2V0KGlkKSAgICAgICAgeyByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyAgfQogICAgZnVuY3Rpb24gaGlkZShpZCkgICAgICAgeyBnZXQoaWQpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJzsgfQogICAgZnVuY3Rpb24gc2hvdyhpZCkgICAgICAgeyBnZXQoaWQpLnN0eWxlLnZpc2liaWxpdHkgPSBudWxsOyAgICAgfQogICAgZnVuY3Rpb24gaHRtbChpZCwgaHRtbCkgeyBnZXQoaWQpLmlubmVySFRNTCA9IGh0bWw7ICAgICAgICAgICAgfQoKICAgIGZ1bmN0aW9uIHRpbWVzdGFtcCgpICAgICAgICAgICB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgIGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkgICAgICB7IHJldHVybiAobWluICsgKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkpOyAgICAgICAgICAgIH0KICAgIGZ1bmN0aW9uIHJhbmRvbUNob2ljZShjaG9pY2VzKSB7IHJldHVybiBjaG9pY2VzW01hdGgucm91bmQocmFuZG9tKDAsIGNob2ljZXMubGVuZ3RoLTEpKV07IH0KCiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHsKICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgfQoKICAgIHZhciBLRVkgICAgID0geyBFU0M6IDI3LCBTUEFDRTogMzIsIExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgRE9XTjogNDAgfSwKICAgICAgICBESVIgICAgID0geyBVUDogMCwgUklHSFQ6IDEsIERPV046IDIsIExFRlQ6IDMsIE1JTjogMCwgTUFYOiAzIH0sCiAgICAgICAgc3RhdHMgICA9IG5ldyBTdGF0cygpLAogICAgICAgIGNhbnZhcyAgPSBnZXQoJ2NhbnZhcycpLAogICAgICAgIGN0eCAgICAgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSwKICAgICAgICB1Y2FudmFzID0gZ2V0KCd1cGNvbWluZycpLAogICAgICAgIHVjdHggICAgPSB1Y2FudmFzLmdldENvbnRleHQoJzJkJyksCiAgICAgICAgc3BlZWQgICA9IHsgc3RhcnQ6IDAuNiwgZGVjcmVtZW50OiAwLjAwNSwgbWluOiAwLjEgfSwKICAgICAgICBueCAgICAgID0gMTAsCiAgICAgICAgbnkgICAgICA9IDIwLAogICAgICAgIG51ICAgICAgPSA1OwoKICAgIHZhciBkeCwgZHksCiAgICAgICAgYmxvY2tzLAogICAgICAgIGFjdGlvbnMsCiAgICAgICAgcGxheWluZywKICAgICAgICBkdCwKICAgICAgICBjdXJyZW50LAogICAgICAgIG5leHQsCiAgICAgICAgc2NvcmUsCiAgICAgICAgdnNjb3JlLAogICAgICAgIHJvd3MsCiAgICAgICAgc3RlcDsKICAgIHZhciBpID0geyBzaXplOiA0LCBibG9ja3M6IFsweDBGMDAsIDB4MjIyMiwgMHgwMEYwLCAweDQ0NDRdLCBjb2xvcjogJ2N5YW4nICAgfTsKICAgIHZhciBqID0geyBzaXplOiAzLCBibG9ja3M6IFsweDQ0QzAsIDB4OEUwMCwgMHg2NDQwLCAweDBFMjBdLCBjb2xvcjogJ2JsdWUnICAgfTsKICAgIHZhciBsID0geyBzaXplOiAzLCBibG9ja3M6IFsweDQ0NjAsIDB4MEU4MCwgMHhDNDQwLCAweDJFMDBdLCBjb2xvcjogJ29yYW5nZScgfTsKICAgIHZhciBvID0geyBzaXplOiAyLCBibG9ja3M6IFsweENDMDAsIDB4Q0MwMCwgMHhDQzAwLCAweENDMDBdLCBjb2xvcjogJ3llbGxvdycgfTsKICAgIHZhciBzID0geyBzaXplOiAzLCBibG9ja3M6IFsweDA2QzAsIDB4OEM0MCwgMHg2QzAwLCAweDQ2MjBdLCBjb2xvcjogJ2dyZWVuJyAgfTsKICAgIHZhciB0ID0geyBzaXplOiAzLCBibG9ja3M6IFsweDBFNDAsIDB4NEM0MCwgMHg0RTAwLCAweDQ2NDBdLCBjb2xvcjogJ3B1cnBsZScgfTsKICAgIHZhciB6ID0geyBzaXplOiAzLCBibG9ja3M6IFsweDBDNjAsIDB4NEM4MCwgMHhDNjAwLCAweDI2NDBdLCBjb2xvcjogJ3JlZCcgICAgfTsKICAgIGZ1bmN0aW9uIGVhY2hibG9jayh0eXBlLCB4LCB5LCBkaXIsIGZuKSB7CiAgICAgIHZhciBiaXQsIHJlc3VsdCwgcm93ID0gMCwgY29sID0gMCwgYmxvY2tzID0gdHlwZS5ibG9ja3NbZGlyXTsKICAgICAgZm9yKGJpdCA9IDB4ODAwMCA7IGJpdCA+IDAgOyBiaXQgPSBiaXQgPj4gMSkgewogICAgICAgIGlmIChibG9ja3MgJiBiaXQpIHsKICAgICAgICAgIGZuKHggKyBjb2wsIHkgKyByb3cpOwogICAgICAgIH0KICAgICAgICBpZiAoKytjb2wgPT09IDQpIHsKICAgICAgICAgIGNvbCA9IDA7CiAgICAgICAgICArK3JvdzsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIG9jY3VwaWVkKHR5cGUsIHgsIHksIGRpcikgewogICAgICB2YXIgcmVzdWx0ID0gZmFsc2UKICAgICAgZWFjaGJsb2NrKHR5cGUsIHgsIHksIGRpciwgZnVuY3Rpb24oeCwgeSkgewogICAgICAgIGlmICgoeCA8IDApIHx8ICh4ID49IG54KSB8fCAoeSA8IDApIHx8ICh5ID49IG55KSB8fCBnZXRCbG9jayh4LHkpKQogICAgICAgICAgcmVzdWx0ID0gdHJ1ZTsKICAgICAgfSk7CiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CgogICAgZnVuY3Rpb24gdW5vY2N1cGllZCh0eXBlLCB4LCB5LCBkaXIpIHsKICAgICAgcmV0dXJuICFvY2N1cGllZCh0eXBlLCB4LCB5LCBkaXIpOwogICAgfQogICAgdmFyIHBpZWNlcyA9IFtdOwogICAgZnVuY3Rpb24gcmFuZG9tUGllY2UoKSB7CiAgICAgIGlmIChwaWVjZXMubGVuZ3RoID09IDApCiAgICAgICAgcGllY2VzID0gW2ksaSxpLGksaixqLGosaixsLGwsbCxsLG8sbyxvLG8scyxzLHMscyx0LHQsdCx0LHoseix6LHpdOwogICAgICB2YXIgdHlwZSA9IHBpZWNlcy5zcGxpY2UocmFuZG9tKDAsIHBpZWNlcy5sZW5ndGgtMSksIDEpWzBdOwogICAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBkaXI6IERJUi5VUCwgeDogTWF0aC5yb3VuZChyYW5kb20oMCwgbnggLSB0eXBlLnNpemUpKSwgeTogMCB9OwogICAgfQoKICAgIGZ1bmN0aW9uIHJ1bigpIHsKCiAgICAgIHNob3dTdGF0cygpOwogICAgICBhZGRFdmVudHMoKTsKCiAgICAgIHZhciBsYXN0ID0gbm93ID0gdGltZXN0YW1wKCk7CiAgICAgIGZ1bmN0aW9uIGZyYW1lKCkgewogICAgICAgIG5vdyA9IHRpbWVzdGFtcCgpOwogICAgICAgIHVwZGF0ZShNYXRoLm1pbigxLCAobm93IC0gbGFzdCkgLyAxMDAwLjApKTsKICAgICAgICBkcmF3KCk7CiAgICAgICAgc3RhdHMudXBkYXRlKCk7CiAgICAgICAgbGFzdCA9IG5vdzsKICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUsIGNhbnZhcyk7CiAgICAgIH0KCiAgICAgIHJlc2l6ZSgpOwogICAgICByZXNldCgpOwogICAgICBmcmFtZSgpOwoKICAgIH0KCiAgICBmdW5jdGlvbiBzaG93U3RhdHMoKSB7CiAgICAgIHN0YXRzLmRvbUVsZW1lbnQuaWQgPSAnc3RhdHMnOwogICAgICBnZXQoJ21lbnUnKS5hcHBlbmRDaGlsZChzdGF0cy5kb21FbGVtZW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiBhZGRFdmVudHMoKSB7CiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duLCBmYWxzZSk7CiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUsIGZhbHNlKTsKICAgIH0KCiAgICBmdW5jdGlvbiByZXNpemUoZXZlbnQpIHsKICAgICAgY2FudmFzLndpZHRoICAgPSBjYW52YXMuY2xpZW50V2lkdGg7CiAgICAgIGNhbnZhcy5oZWlnaHQgID0gY2FudmFzLmNsaWVudEhlaWdodDsKICAgICAgdWNhbnZhcy53aWR0aCAgPSB1Y2FudmFzLmNsaWVudFdpZHRoOwogICAgICB1Y2FudmFzLmhlaWdodCA9IHVjYW52YXMuY2xpZW50SGVpZ2h0OwogICAgICBkeCA9IGNhbnZhcy53aWR0aCAgLyBueDsKICAgICAgZHkgPSBjYW52YXMuaGVpZ2h0IC8gbnk7CiAgICAgIGludmFsaWRhdGUoKTsKICAgICAgaW52YWxpZGF0ZU5leHQoKTsKICAgIH0KCiAgICBmdW5jdGlvbiBrZXlkb3duKGV2KSB7CiAgICAgIHZhciBoYW5kbGVkID0gZmFsc2U7CiAgICAgIGlmIChwbGF5aW5nKSB7CiAgICAgICAgc3dpdGNoKGV2LmtleUNvZGUpIHsKICAgICAgICAgIGNhc2UgS0VZLkxFRlQ6ICAgYWN0aW9ucy5wdXNoKERJUi5MRUZUKTsgIGhhbmRsZWQgPSB0cnVlOyBicmVhazsKICAgICAgICAgIGNhc2UgS0VZLlJJR0hUOiAgYWN0aW9ucy5wdXNoKERJUi5SSUdIVCk7IGhhbmRsZWQgPSB0cnVlOyBicmVhazsKICAgICAgICAgIGNhc2UgS0VZLlVQOiAgICAgYWN0aW9ucy5wdXNoKERJUi5VUCk7ICAgIGhhbmRsZWQgPSB0cnVlOyBicmVhazsKICAgICAgICAgIGNhc2UgS0VZLkRPV046ICAgYWN0aW9ucy5wdXNoKERJUi5ET1dOKTsgIGhhbmRsZWQgPSB0cnVlOyBicmVhazsKICAgICAgICAgIGNhc2UgS0VZLkVTQzogICAgbG9zZSgpOyAgICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlOyBicmVhazsKICAgICAgICB9CiAgICAgIH0KICAgICAgZWxzZSBpZiAoZXYua2V5Q29kZSA9PSBLRVkuU1BBQ0UpIHsKICAgICAgICBwbGF5KCk7CiAgICAgICAgaGFuZGxlZCA9IHRydWU7CiAgICAgIH0KICAgICAgaWYgKGhhbmRsZWQpCiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTsKICAgIH0KICAgIGZ1bmN0aW9uIHBsYXkoKSB7IGhpZGUoJ3N0YXJ0Jyk7IHJlc2V0KCk7ICAgICAgICAgIHBsYXlpbmcgPSB0cnVlOyAgfQogICAgZnVuY3Rpb24gbG9zZSgpIHsgc2hvdygnc3RhcnQnKTsgc2V0VmlzdWFsU2NvcmUoKTsgcGxheWluZyA9IGZhbHNlOyB9CgogICAgZnVuY3Rpb24gc2V0VmlzdWFsU2NvcmUobikgICAgICB7IHZzY29yZSA9IG4gfHwgc2NvcmU7IGludmFsaWRhdGVTY29yZSgpOyB9CiAgICBmdW5jdGlvbiBzZXRTY29yZShuKSAgICAgICAgICAgIHsgc2NvcmUgPSBuOyBzZXRWaXN1YWxTY29yZShuKTsgIH0KICAgIGZ1bmN0aW9uIGFkZFNjb3JlKG4pICAgICAgICAgICAgeyBzY29yZSA9IHNjb3JlICsgbjsgICB9CiAgICBmdW5jdGlvbiBjbGVhclNjb3JlKCkgICAgICAgICAgIHsgc2V0U2NvcmUoMCk7IH0KICAgIGZ1bmN0aW9uIGNsZWFyUm93cygpICAgICAgICAgICAgeyBzZXRSb3dzKDApOyB9CiAgICBmdW5jdGlvbiBzZXRSb3dzKG4pICAgICAgICAgICAgIHsgcm93cyA9IG47IHN0ZXAgPSBNYXRoLm1heChzcGVlZC5taW4sIHNwZWVkLnN0YXJ0IC0gKHNwZWVkLmRlY3JlbWVudCpyb3dzKSk7IGludmFsaWRhdGVSb3dzKCk7IH0KICAgIGZ1bmN0aW9uIGFkZFJvd3MobikgICAgICAgICAgICAgeyBzZXRSb3dzKHJvd3MgKyBuKTsgfQogICAgZnVuY3Rpb24gZ2V0QmxvY2soeCx5KSAgICAgICAgICB7IHJldHVybiAoYmxvY2tzICYmIGJsb2Nrc1t4XSA/IGJsb2Nrc1t4XVt5XSA6IG51bGwpOyB9CiAgICBmdW5jdGlvbiBzZXRCbG9jayh4LHksdHlwZSkgICAgIHsgYmxvY2tzW3hdID0gYmxvY2tzW3hdIHx8IFtdOyBibG9ja3NbeF1beV0gPSB0eXBlOyBpbnZhbGlkYXRlKCk7IH0KICAgIGZ1bmN0aW9uIGNsZWFyQmxvY2tzKCkgICAgICAgICAgeyBibG9ja3MgPSBbXTsgaW52YWxpZGF0ZSgpOyB9CiAgICBmdW5jdGlvbiBjbGVhckFjdGlvbnMoKSAgICAgICAgIHsgYWN0aW9ucyA9IFtdOyB9CiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UGllY2UocGllY2UpIHsgY3VycmVudCA9IHBpZWNlIHx8IHJhbmRvbVBpZWNlKCk7IGludmFsaWRhdGUoKTsgICAgIH0KICAgIGZ1bmN0aW9uIHNldE5leHRQaWVjZShwaWVjZSkgICAgeyBuZXh0ICAgID0gcGllY2UgfHwgcmFuZG9tUGllY2UoKTsgaW52YWxpZGF0ZU5leHQoKTsgfQoKICAgIGZ1bmN0aW9uIHJlc2V0KCkgewogICAgICBkdCA9IDA7CiAgICAgIGNsZWFyQWN0aW9ucygpOwogICAgICBjbGVhckJsb2NrcygpOwogICAgICBjbGVhclJvd3MoKTsKICAgICAgY2xlYXJTY29yZSgpOwogICAgICBzZXRDdXJyZW50UGllY2UobmV4dCk7CiAgICAgIHNldE5leHRQaWVjZSgpOwogICAgfQoKICAgIGZ1bmN0aW9uIHVwZGF0ZShpZHQpIHsKICAgICAgaWYgKHBsYXlpbmcpIHsKICAgICAgICBpZiAodnNjb3JlIDwgc2NvcmUpCiAgICAgICAgICBzZXRWaXN1YWxTY29yZSh2c2NvcmUgKyAxKTsKICAgICAgICBoYW5kbGUoYWN0aW9ucy5zaGlmdCgpKTsKICAgICAgICBkdCA9IGR0ICsgaWR0OwogICAgICAgIGlmIChkdCA+IHN0ZXApIHsKICAgICAgICAgIGR0ID0gZHQgLSBzdGVwOwogICAgICAgICAgZHJvcCgpOwogICAgICAgIH0KICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGhhbmRsZShhY3Rpb24pIHsKICAgICAgc3dpdGNoKGFjdGlvbikgewogICAgICAgIGNhc2UgRElSLkxFRlQ6ICBtb3ZlKERJUi5MRUZUKTsgIGJyZWFrOwogICAgICAgIGNhc2UgRElSLlJJR0hUOiBtb3ZlKERJUi5SSUdIVCk7IGJyZWFrOwogICAgICAgIGNhc2UgRElSLlVQOiAgICByb3RhdGUoKTsgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgRElSLkRPV046ICBkcm9wKCk7ICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gbW92ZShkaXIpIHsKICAgICAgdmFyIHggPSBjdXJyZW50LngsIHkgPSBjdXJyZW50Lnk7CiAgICAgIHN3aXRjaChkaXIpIHsKICAgICAgICBjYXNlIERJUi5SSUdIVDogeCA9IHggKyAxOyBicmVhazsKICAgICAgICBjYXNlIERJUi5MRUZUOiAgeCA9IHggLSAxOyBicmVhazsKICAgICAgICBjYXNlIERJUi5ET1dOOiAgeSA9IHkgKyAxOyBicmVhazsKICAgICAgfQogICAgICBpZiAodW5vY2N1cGllZChjdXJyZW50LnR5cGUsIHgsIHksIGN1cnJlbnQuZGlyKSkgewogICAgICAgIGN1cnJlbnQueCA9IHg7CiAgICAgICAgY3VycmVudC55ID0geTsKICAgICAgICBpbnZhbGlkYXRlKCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgZWxzZSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gcm90YXRlKCkgewogICAgICB2YXIgbmV3ZGlyID0gKGN1cnJlbnQuZGlyID09IERJUi5NQVggPyBESVIuTUlOIDogY3VycmVudC5kaXIgKyAxKTsKICAgICAgaWYgKHVub2NjdXBpZWQoY3VycmVudC50eXBlLCBjdXJyZW50LngsIGN1cnJlbnQueSwgbmV3ZGlyKSkgewogICAgICAgIGN1cnJlbnQuZGlyID0gbmV3ZGlyOwogICAgICAgIGludmFsaWRhdGUoKTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGRyb3AoKSB7CiAgICAgIGlmICghbW92ZShESVIuRE9XTikpIHsKICAgICAgICBhZGRTY29yZSgxMCk7CiAgICAgICAgZHJvcFBpZWNlKCk7CiAgICAgICAgcmVtb3ZlTGluZXMoKTsKICAgICAgICBzZXRDdXJyZW50UGllY2UobmV4dCk7CiAgICAgICAgc2V0TmV4dFBpZWNlKHJhbmRvbVBpZWNlKCkpOwogICAgICAgIGNsZWFyQWN0aW9ucygpOwogICAgICAgIGlmIChvY2N1cGllZChjdXJyZW50LnR5cGUsIGN1cnJlbnQueCwgY3VycmVudC55LCBjdXJyZW50LmRpcikpIHsKICAgICAgICAgIGxvc2UoKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBkcm9wUGllY2UoKSB7CiAgICAgIGVhY2hibG9jayhjdXJyZW50LnR5cGUsIGN1cnJlbnQueCwgY3VycmVudC55LCBjdXJyZW50LmRpciwgZnVuY3Rpb24oeCwgeSkgewogICAgICAgIHNldEJsb2NrKHgsIHksIGN1cnJlbnQudHlwZSk7CiAgICAgIH0pOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpbmVzKCkgewogICAgICB2YXIgeCwgeSwgY29tcGxldGUsIG4gPSAwOwogICAgICBmb3IoeSA9IG55IDsgeSA+IDAgOyAtLXkpIHsKICAgICAgICBjb21wbGV0ZSA9IHRydWU7CiAgICAgICAgZm9yKHggPSAwIDsgeCA8IG54IDsgKyt4KSB7CiAgICAgICAgICBpZiAoIWdldEJsb2NrKHgsIHkpKQogICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlOwogICAgICAgIH0KICAgICAgICBpZiAoY29tcGxldGUpIHsKICAgICAgICAgIHJlbW92ZUxpbmUoeSk7CiAgICAgICAgICB5ID0geSArIDE7CiAgICAgICAgICBuKys7CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmIChuID4gMCkgewogICAgICAgIGFkZFJvd3Mobik7CiAgICAgICAgYWRkU2NvcmUoMTAwKk1hdGgucG93KDIsbi0xKSk7CiAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiByZW1vdmVMaW5lKG4pIHsKICAgICAgdmFyIHgsIHk7CiAgICAgIGZvcih5ID0gbiA7IHkgPj0gMCA7IC0teSkgewogICAgICAgIGZvcih4ID0gMCA7IHggPCBueCA7ICsreCkKICAgICAgICAgIHNldEJsb2NrKHgsIHksICh5ID09IDApID8gbnVsbCA6IGdldEJsb2NrKHgsIHktMSkpOwogICAgICB9CiAgICB9CiAgICB2YXIgaW52YWxpZCA9IHt9OwoKICAgIGZ1bmN0aW9uIGludmFsaWRhdGUoKSAgICAgICAgIHsgaW52YWxpZC5jb3VydCAgPSB0cnVlOyB9CiAgICBmdW5jdGlvbiBpbnZhbGlkYXRlTmV4dCgpICAgICB7IGludmFsaWQubmV4dCAgID0gdHJ1ZTsgfQogICAgZnVuY3Rpb24gaW52YWxpZGF0ZVNjb3JlKCkgICAgeyBpbnZhbGlkLnNjb3JlICA9IHRydWU7IH0KICAgIGZ1bmN0aW9uIGludmFsaWRhdGVSb3dzKCkgICAgIHsgaW52YWxpZC5yb3dzICAgPSB0cnVlOyB9CgogICAgZnVuY3Rpb24gZHJhdygpIHsKICAgICAgY3R4LnNhdmUoKTsKICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7CiAgICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpOwogICAgICBkcmF3Q291cnQoKTsKICAgICAgZHJhd05leHQoKTsKICAgICAgZHJhd1Njb3JlKCk7CiAgICAgIGRyYXdSb3dzKCk7CiAgICAgIGN0eC5yZXN0b3JlKCk7CiAgICB9CgogICAgZnVuY3Rpb24gZHJhd0NvdXJ0KCkgewogICAgICBpZiAoaW52YWxpZC5jb3VydCkgewogICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsKICAgICAgICBpZiAocGxheWluZykKICAgICAgICAgIGRyYXdQaWVjZShjdHgsIGN1cnJlbnQudHlwZSwgY3VycmVudC54LCBjdXJyZW50LnksIGN1cnJlbnQuZGlyKTsKICAgICAgICB2YXIgeCwgeSwgYmxvY2s7CiAgICAgICAgZm9yKHkgPSAwIDsgeSA8IG55IDsgeSsrKSB7CiAgICAgICAgICBmb3IgKHggPSAwIDsgeCA8IG54IDsgeCsrKSB7CiAgICAgICAgICAgIGlmIChibG9jayA9IGdldEJsb2NrKHgseSkpCiAgICAgICAgICAgICAgZHJhd0Jsb2NrKGN0eCwgeCwgeSwgYmxvY2suY29sb3IpOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBueCpkeCAtIDEsIG55KmR5IC0gMSk7CiAgICAgICAgaW52YWxpZC5jb3VydCA9IGZhbHNlOwogICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gZHJhd05leHQoKSB7CiAgICAgIGlmIChpbnZhbGlkLm5leHQpIHsKICAgICAgICB2YXIgcGFkZGluZyA9IChudSAtIG5leHQudHlwZS5zaXplKSAvIDI7CiAgICAgICAgdWN0eC5zYXZlKCk7CiAgICAgICAgdWN0eC50cmFuc2xhdGUoMC41LCAwLjUpOwogICAgICAgIHVjdHguY2xlYXJSZWN0KDAsIDAsIG51KmR4LCBudSpkeSk7CiAgICAgICAgZHJhd1BpZWNlKHVjdHgsIG5leHQudHlwZSwgcGFkZGluZywgcGFkZGluZywgbmV4dC5kaXIpOwogICAgICAgIHVjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snOwogICAgICAgIHVjdHguc3Ryb2tlUmVjdCgwLCAwLCBudSpkeCAtIDEsIG51KmR5IC0gMSk7CiAgICAgICAgdWN0eC5yZXN0b3JlKCk7CiAgICAgICAgaW52YWxpZC5uZXh0ID0gZmFsc2U7CiAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBkcmF3U2NvcmUoKSB7CiAgICAgIGlmIChpbnZhbGlkLnNjb3JlKSB7CiAgICAgICAgaHRtbCgnc2NvcmUnLCAoIjAwMDAwIiArIE1hdGguZmxvb3IodnNjb3JlKSkuc2xpY2UoLTUpKTsKICAgICAgICBpbnZhbGlkLnNjb3JlID0gZmFsc2U7CiAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBkcmF3Um93cygpIHsKICAgICAgaWYgKGludmFsaWQucm93cykgewogICAgICAgIGh0bWwoJ3Jvd3MnLCByb3dzKTsKICAgICAgICBpbnZhbGlkLnJvd3MgPSBmYWxzZTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGRyYXdQaWVjZShjdHgsIHR5cGUsIHgsIHksIGRpcikgewogICAgICBlYWNoYmxvY2sodHlwZSwgeCwgeSwgZGlyLCBmdW5jdGlvbih4LCB5KSB7CiAgICAgICAgZHJhd0Jsb2NrKGN0eCwgeCwgeSwgdHlwZS5jb2xvcik7CiAgICAgIH0pOwogICAgfQoKICAgIGZ1bmN0aW9uIGRyYXdCbG9jayhjdHgsIHgsIHksIGNvbG9yKSB7CiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjsKICAgICAgY3R4LmZpbGxSZWN0KHgqZHgsIHkqZHksIGR4LCBkeSk7CiAgICAgIGN0eC5zdHJva2VSZWN0KHgqZHgsIHkqZHksIGR4LCBkeSkKICAgIH0KICAgIHJ1bigpOwogIDwvc2NyaXB0Pgo8L2JvZHk+CjwvaHRtbD4=")
document.getElementsByTagName("body")[0].appendChild(mg).focus()
var thestyle = document.createElement("style")
thestyle.innerText += "#mgid {position: fixed; left: 0px; top: 0px; width: 100%; height:100%; background: black; z-index: 9999999999; border: none;}"
thestyle.innerText += "body {overflow: hidden;}"
document.getElementsByTagName("body")[0].appendChild(thestyle)
