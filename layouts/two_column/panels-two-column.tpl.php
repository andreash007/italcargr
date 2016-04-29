<div class="panel-display clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if (!empty($content['left'])): ?>
  <div class="panel-panel panel-col-left">
    <div class="inside"><?php print $content['left']; ?></div>
  </div>
  <?php endif; ?>

  <?php if (!empty($content['right'])): ?>
  <div class="panel-panel panel-col-right">
    <div class="inside"><?php print $content['right']; ?></div>
  </div>
  <?php endif; ?>
</div>
