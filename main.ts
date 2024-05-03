import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class NameShine extends JFrame {
    private JLabel nameLabel;
    private Timer timer;
    private Color[] colors = { Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW };

    public NameShine(String name) {
        super("Name Shine");
        nameLabel = new JLabel(name);
        nameLabel.setFont(new Font("Arial", Font.BOLD, 24));
        add(nameLabel);
        timer = new Timer(500, e -> nameLabel.setForeground(colors[(++colorIndex) % colors.length]));
        timer.start();
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(300, 100);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new NameShine("Quốc Anh"));
    }
}
