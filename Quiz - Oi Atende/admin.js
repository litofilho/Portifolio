<div class="wrapper">
	<div class="wrap">
		<div class="coluna col-12">
			<div class="detalhes-procedimentos">
				<input type="hidden" id="idProcedimento" value="4028815065825E4D01658ADD08D47AF7">

				<h3 class="titulo">Cadastro de Clientes com Deficiência</h3>
				<div class="btn-add fancybox.iframe" href="demo.html">Adicionar</div>

				<div class="conteudo-procedimentos detalhes-procedimentos">
					<div class="filtro-container">
						<div class="nome filtro">
								<div class="lum-form-field-label">
								</div>
							<p>Nome</p>
							<input type="text" name="nome">
						</div>

						<div class="numero filtro">
								<div class="lum-form-field-label">
								</div>
								<p>Número Oi</p>
							<input type="text" name="numero">
						</div>

						<div class="numerof filtro">
								<div class="lum-form-field-label">
								</div>
								<p>Número Fixo</p>
							<input type="text" name="numerof">
						</div>

						<div class="deficiencia filtro">
							<div class="lum-form-field-value">
								<div class="select">
										<p>Deficiência</p>
                    <select class="select2-hidden-accessible" id="deficiencias" tabindex="-1" aria-hidden="true">
                      <option value="">Deficiência</option>
                      <option value="">Surdo</option>
                      <option value="">Mudo</option>
                      <option value="">Surdo e Mudo</option>
                    </select>
                    <span class="deficiencias select2 select2-container select2-container--default" dir="ltr">
                      <span class="selection">
                        <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-operacoes_usuario-container">
                          <span class="select2-selection__rendered" id="deficiencia" title="Deficiência">Selecione uma opção</span>
                          <span class="select2-selection__arrow" role="presentation"><img src="./81178 - Teste página impressao _ Oi Atende_files/seta-cinza.svg">
                          </span>
                        </span>
                      </span>
                      <span class="dropdown-wrapper" aria-hidden="true">
                      </span>
                    </span>
								</div>
                <script>
                	$(document).ready(function() {
                		$('.deficiencias .selection .select2-selection__rendered').one("click", function(){
                			$('#deficiencias').slimScroll({
                				height:'230px',
                				size:'6px',
                				color:'#b22072',
                				opacity:1,
                				borderRadius:0,
                				alwaysVisible:true,
                				railVisible:true,
                				railColor:'#ededed',
                				railOpacity:1,
                				railBorderRadius:0,
                				disableFadeOut:true
                			});
                		});
                		$('#operacoes_usuario').change(function(){
                			location.href = $('#operacoes_usuario').val();
                		});

                	});
                </script>
							</div>
						</div>
						<div class="btn-pesquisar filtro">Pesquisar</div>
					</div>

          <div class="tabela-deficientes">
							<div class="row header">
							  <div class="cell">
								Nome
							  </div>
							  <div class="cell">
								Numero Oi
							  </div>
							  <div class="cell">
								Numero Fixo
							  </div>
							  <div class="cell">
								Deficiencia
							  </div>
							  <div class="cell">
								Ações
                </div>
							</div>

							<div class="row">
							  <div class="cell" data-title="nome">
								Clara Martins
							  </div>
							  <div class="cell" data-title="numero">
								(61) 12345678
							  </div>
							  <div class="cell" data-title="numerof">
								(61) 87654321
							  </div>
							  <div class="cell" data-title="deficiencia">
								Surdo
							  </div>
                <div class="cell" data-title="Ações">
                  <div class="btn-editar fancybox.iframe" href="demo.html" title="Editar">
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/pencil-edit-button.svg"/>
                  </div>
                  <div class="btn-excluir fancybox.iframe" title="Excluir" href="demo2.html" title="Excluir" >
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/delete-photo.svg"/>
                  </div>
								</div>
							</div>

							<div class="row">
							  <div class="cell" data-title="nome">
								Emilly
							  </div>
							  <div class="cell" data-title="numero">
								(34) 12876678
							  </div>
							  <div class="cell" data-title="numerof">
								(34) 09663451
							  </div>
							  <div class="cell" data-title="deficiencia">
								Surdo-mudo
							  </div>
                <div class="cell" data-title="Ações">
                  <div class="btn-editar fancybox.iframe" href="demo.html" title="Editar">
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/pencil-edit-button.svg"/>
                  </div>
                  <div class="btn-excluir fancybox.iframe" title="Excluir" href="demo2.html" title="Excluir" >
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/delete-photo.svg"/>
                  </div>
								</div>
							</div>

							<div class="row">
							  <div class="cell" data-title="nome">
								Guilherme
							  </div>
							  <div class="cell" data-title="numero">
								(16) 87523421
							  </div>
							  <div class="cell" data-title="numerof">
								(16) 99875234
							  </div>
							  <div class="cell" data-title="deficiencia">
								Surdo-mudo
							  </div>
                <div class="cell" data-title="Ações">
                  <div class="btn-editar fancybox.iframe" href="demo.html" title="Editar">
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/pencil-edit-button.svg"/>
                  </div>
                  <div class="btn-excluir fancybox.iframe" title="Excluir" href="demo2.html" title="Excluir" >
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/delete-photo.svg"/>
                  </div>
								</div>
							</div>

							<div class="row">
							  <div class="cell" data-title="nome">
								Luis
							  </div>
							  <div class="cell" data-title="numero">
								(21) 87523421
							  </div>
							  <div class="cell" data-title="numerof">
								(16) 99875234
							  </div>
							  <div class="cell" data-title="deficiencia">
								Mudo
							  </div>
                <div class="cell" data-title="Ações">
                  <div class="btn-editar fancybox.iframe" href="demo.html" title="Editar">
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/pencil-edit-button.svg"/>
                  </div>
                  <div class="btn-excluir" title="Excluir" href="demo2.html" title="Excluir" >
                    <img src="81178 - Teste página impressao _ Oi Atende_files/img/delete-photo.svg"/>
                  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
